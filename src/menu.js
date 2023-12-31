function createMenuTab() {
    const menu = document.createElement('div');
    menu.classList.add("menu-content")

    menu.appendChild(
                createMenuItem(
                    "Margherita", "Tomato sauce, fresh mozzarella cheese, fresh basil leaves, olive oil, and a sprinkle of salt"
                )
    )
    menu.appendChild(
        createMenuItem(
            "Pepperoni", "Tomato sauce, mozzarella cheese, pepperoni slices"
        )
    )
    menu.appendChild(
        createMenuItem(
            "VegetarianSupreme", "Tomato sauce, mozzarella cheese, bell peppers, red onions, black olives, mushrooms, and tomatoes"
        )
    )
    menu.appendChild(
        createMenuItem(
            "Hawaiian", "Tomato sauce, mozzarella cheese, ham, pineapple chunks"
        )
    )
    menu.appendChild(
        createMenuItem(
            "MeatLovers", "Tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, and ground beef"
        )
    )
    menu.appendChild(
        createMenuItem(
            "MargaritaProsciutto", "Tomato sauce, fresh mozzarella cheese, fresh basil leaves, prosciutto slices, olive oil, and a sprinkle of salt"
        )
    )

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div')
    menuItem.classList.add("pizza-card")

    const foodName = document.createElement('h3');
    foodName.textContent = name;

    const foodDescription  = document.createElement('p');
    foodDescription.textContent = description;

    const foodImage = document.createElement('img')
    foodImage.src = `images/${name.toLowerCase()}.png`
    foodImage.alt = `${name}`;
    foodImage.width = "128px";
    foodImage.height = "128px";


    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenuTab)
}

export default loadMenu;