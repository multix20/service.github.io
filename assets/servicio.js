document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const town = urlParams.get('town');
    const serviceType = urlParams.get('service');

    const serviceGrid = document.getElementById('service-grid');
    const servicesText = document.getElementById('services-text');

    if (town && serviceType) {
        servicesText.innerText = `${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} en ${town.charAt(0).toUpperCase() + town.slice(1)}`;

        if (data[town] && data[town][serviceType]) {
            data[town][serviceType].forEach(service => {
                const serviceItem = document.createElement('div');
                serviceItem.className = 'service-item';
                serviceItem.innerHTML = `
                    <img src="${service.image}" alt="${service.name}">
                    <h3>${service.name}</h3>
                    <p>Contacto: ${service.contact}</p>
                    <div class="service-links">
                        <a href="${service.whatsapp}" target="_blank" class="service-link"><i class="fab fa-whatsapp"></i></a>
                        <a href="${service.map}" target="_blank" class="service-link"><i class="fas fa-map-marker-alt"></i></a>
                        <a href="${service.website}" target="_blank" class="service-link"><i class="fas fa-globe"></i></a>
                    </div>
                `;
                serviceGrid.appendChild(serviceItem);
            });
        } else {
            serviceGrid.innerHTML = '<p>No hay información disponible para este servicio.</p>';
        }
    } else {
        serviceGrid.innerHTML = '<p>Error: Parámetros de URL inválidos.</p>';
    }
});
