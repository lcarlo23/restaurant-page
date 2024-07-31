import home_bg from '../assets/images/home_bg.jpg';

export default function createMenu() {

    const content = document.getElementById('content');

    content.textContent = '';

    const img = document.createElement('img');
    const title = document.createElement('h1');

    function createPar(text) {
        const par = document.createElement('p');
        par.textContent = text;
        return par;
    };

    function createDiv(heading) {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');

        h2.textContent = heading;

        div.appendChild(h2);

        return div;
    };

    img.setAttribute('src', home_bg);
    img.setAttribute('width', '100%');
    title.textContent = 'Menu of the Week';

    const appet = createDiv('Appetizers');

    const brus = createPar(
        `Bruschetta: Grilled bread topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.`
    );

    const cala = createPar(
        `Calamari Fritti: Lightly breaded and fried calamari served with a zesty marinara sauce.`
    );

    const capr = createPar(
        `Caprese Salad: Slices of fresh mozzarella, tomatoes, and basil, drizzled with olive oil and balsamic reduction.`
    );

    appet.appendChild(brus);
    appet.appendChild(cala);
    appet.appendChild(capr);

    const main = createDiv('Main Courses');

    const spag = createPar(
        `Spaghetti Carbonara: Classic Italian pasta with pancetta, eggs, Parmesan cheese, and black pepper.`
    );

    const chick = createPar(
        `Chicken Marsala: Tender chicken breasts sautéed with mushrooms in a rich Marsala wine sauce, served with garlic mashed potatoes.`
    );

    const seaf = createPar(
        `Seafood Risotto: Creamy Arborio rice cooked with a medley of fresh seafood, white wine, and saffron.`
    );

    main.appendChild(spag);
    main.appendChild(chick);
    main.appendChild(seaf);

    const dess = createDiv('Desserts');

    const tira = createPar(
        `Tiramisu: Layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.`
    );

    const panna = createPar(
        `Panna Cotta: Silky smooth vanilla panna cotta served with a berry compote.`
    );

    const canno = createPar(
        `Cannoli: Crisp pastry shells filled with sweet ricotta cheese and chocolate chips.`
    );

    dess.appendChild(tira);
    dess.appendChild(panna);
    dess.appendChild(canno);

    // Desserts
    // Tiramisu: Layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.
    // Panna Cotta: Silky smooth vanilla panna cotta served with a berry compote.
    // Cannoli: Crisp pastry shells filled with sweet ricotta cheese and chocolate chips.`;

    content.appendChild(img);
    content.appendChild(title);
    content.appendChild(appet);
    content.appendChild(main);
    content.appendChild(dess);

}