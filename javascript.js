document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation for Contact Form
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const phone = form.querySelector('input[name="phone"]').value;
            const message = form.querySelector('textarea').value;

            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Example validation for email
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Message sent successfully!');
            form.reset(); // Reset the form after submission
        });
    }

    // Image Carousel for Tourist Places Section
    const placesContainer = document.querySelector('.places-container');
    if (placesContainer) {
        fetch('path/to/your/data.json') // Replace with your data source
            .then(response => response.json())
            .then(data => {
                const carouselInner = document.querySelector('#touristCarousel .carousel-inner');
                data.places.forEach((place, index) => {
                    const isActive = index === 0 ? 'active' : '';
                    const placeHtml = `
                        <div class="carousel-item ${isActive}">
                            <img src="${place.image}" class="d-block w-100" alt="${place.name}">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${place.name}</h5>
                            </div>
                        </div>
                    `;
                    carouselInner.innerHTML += placeHtml;
                });
            })
            .catch(error => console.error('Error loading data:', error));
    }
});
