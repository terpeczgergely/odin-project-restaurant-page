function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-content');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+3679797998'

    const address = document.createElement('address');
    address.textContent = 'Budapest 1045 Rózsa Street 27'

    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = "images/location.png"
    restaurantLocation.alt = "picture of the restaurant on map"

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main')
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;