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
            photos: ['imagenes/gallery/6julio/jul6img1.jpg','imagenes/gallery/6julio/jul6img2.jpg','imagenes/gallery/6julio/jul6img3.jpg','imagenes/gallery/6julio/jul6img4.jpg','imagenes/gallery/6julio/jul6img5.jpg','imagenes/gallery/6julio/jul6img6.jpg','imagenes/gallery/6julio/jul6img7.jpg','imagenes/gallery/6julio/jul6img8.jpg',]
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
});