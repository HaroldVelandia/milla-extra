document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            date: '2024-03-02',
            title: '2 de Marzo 2024',
            photos: ['imagenes/gallery/2marzo/mar2img1.jpg', 'imagenes/gallery/2marzo/mar2img2.jpg', 'imagenes/gallery/2marzo/mar2img3.jpg']
        },
        {
            date: '2024-05-04',
            title: '4 de Mayo 2024',
            photos: ['imagenes/gallery/4mayo/may4img1.jpg', 'imagenes/gallery/4mayo/may4img2.jpg','imagenes/gallery/4mayo/may4img3.jpg','imagenes/gallery/4mayo/may4img4.jpg','imagenes/gallery/4mayo/may4img5.jpg']
        },
        {
            date: '2024-07-06',
            title: '6 de Julio 2024',
            photos: ['imagenes/gallery/6julio/jul6img1.jpg','imagenes/gallery/6julio/jul6img2.jpg','imagenes/gallery/6julio/jul6img3.jpg','imagenes/gallery/6julio/jul6img4.jpg','imagenes/gallery/6julio/jul6img5.jpg','imagenes/gallery/6julio/jul6img6.jpg','imagenes/gallery/6julio/jul6img7.jpg']
        },
        {
            date: '2024-09-07',
            title: '7 de Septiembre 2024',
            photos: ['imagenes/gallery/7sep/sep7img1.jpg','imagenes/gallery/7sep/sep7img2.jpg','imagenes/gallery/7sep/sep7img3.jpg','imagenes/gallery/7sep/sep7img4.jpg','imagenes/gallery/7sep/sep7img5.jpg','imagenes/gallery/7sep/sep7img6.jpg','imagenes/gallery/7sep/sep7img7.jpg','imagenes/gallery/7sep/sep7img8.jpg','imagenes/gallery/7sep/sep7img9.jpg']
        },
        {
            date: '2024-08-24',
            title: 'Clausura semana Juvenil',
            photos: ['imagenes/gallery/cljov/cljov1.jpg','imagenes/gallery/cljov/cljov2.jpg','imagenes/gallery/cljov/cljov3.jpg','imagenes/gallery/cljov/cljov4.jpg','imagenes/gallery/cljov/cljov5.jpg','imagenes/gallery/cljov/cljov6.jpg','imagenes/gallery/cljov/cljov7.jpg','imagenes/gallery/cljov/cljov8.jpg']
        }
    ];

    const galleryContainer = document.getElementById('event-gallery');

    events.forEach(event => {
        // Crear sección para cada evento
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.id = `event-${event.date}`;

        // Crear título del evento
        const eventTitle = document.createElement('h2');
        eventTitle.textContent = event.title;
        eventDiv.appendChild(eventTitle);

        // Crear contenedor del carrusel
        const carouselDiv = document.createElement('div');
        carouselDiv.className = 'carousel';

        // Añadir imágenes al carrusel
        event.photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = `${event.title} - Foto ${index + 1}`;
            if (index === 0) img.classList.add('active'); // Mostrar la primera imagen por defecto
            carouselDiv.appendChild(img);
        });

        // Añadir controles del carrusel
        const prevButton = document.createElement('button');
        prevButton.className = 'carousel-control prev';
        prevButton.textContent = '<';
        prevButton.addEventListener('click', () => {
            changeSlide(carouselDiv, -1);
        });

        const nextButton = document.createElement('button');
        nextButton.className = 'carousel-control next';
        nextButton.textContent = '>';
        nextButton.addEventListener('click', () => {
            changeSlide(carouselDiv, 1);
        });

        carouselDiv.appendChild(prevButton);
        carouselDiv.appendChild(nextButton);

        eventDiv.appendChild(carouselDiv);
        galleryContainer.appendChild(eventDiv);
    });

    function changeSlide(carousel, direction) {
        const images = carousel.querySelectorAll('img');
        let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
        images[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + direction + images.length) % images.length;
        images[activeIndex].classList.add('active');
    }

    //transisiones automaticas de IMGs carrouseles
    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentIndex = 0;
        const intervalTime = 5000; // Cambiar imagen cada 5 segundos
        let autoSlideInterval;
    
        const showImage = (index) => {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        };
    
        const nextImage = () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        };
    
        const prevImage = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        };
    
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(nextImage, intervalTime);
        };
    
        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };
    
        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextImage();
            startAutoSlide();
        });
    
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            prevImage();
            startAutoSlide();
        });
    
        // Inici0 de transisiones imgs
        startAutoSlide();
    
        // Pausa con hover de mouse
        carousel.addEventListener('mouseover', stopAutoSlide);
        carousel.addEventListener('mouseout', startAutoSlide);
    });
});


