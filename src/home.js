function createHome() {
    const home = document.createElement('div');
    home.classList.add('home-content');

    const chef = document.createElement('img')
    chef.src = 'images/chef.jpg';
    chef.alt = 'Pizza restaurant'

    home.appendChild(createpTag("Best Pizza in your country"))
    home.appendChild(createpTag("Made with passion since 1908"));
    home.appendChild(chef);
    home.appendChild(createpTag("Order online or visit us!"));

    return home;

}

function createpTag(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;