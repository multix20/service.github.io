document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards-container .card');
    const allServices = document.getElementById('all-services').querySelectorAll('.service');
    const servicesContainer = document.getElementById('services-container');
    const header = document.getElementById('header');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const town = card.getAttribute('data-town');
            servicesContainer.innerHTML = '';
            allServices.forEach(service => {
                if (service.getAttribute('data-town') === town) {
                    const clone = service.cloneNode(true);
                    clone.classList.add('show');
                    servicesContainer.appendChild(clone);

                    // Agregar evento de click para redirigir a la página dinámica con parámetros en la URL
                    clone.addEventListener('click', () => {
                        const serviceType = clone.querySelector('p').innerText.toLowerCase();
                        window.location.href = `servicio.html?town=${town}&service=${serviceType}`;
                    });
                }
            });
        });
    });

    setInterval(() => {
        header.classList.toggle('show-english');
    }, 3000);
});
