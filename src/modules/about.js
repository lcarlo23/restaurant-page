import home_bg from '../assets/images/home_bg.jpg';

export default function createAbout() {

    const content = document.getElementById('content');

    content.textContent = '';

    const img = document.createElement('img');
    const title = document.createElement('h1');

    img.setAttribute('src', home_bg);
    img.setAttribute('width', '100%');
    title.textContent = 'About Us';

    function createPar(text) {
        const par = document.createElement('p');
        par.textContent = text;
        return par;
    };

    const oneP = createPar(`Welcome to My Restaurant, where passion for food and dedication to excellence come together to create an unforgettable dining experience. Nestled in the heart of Italy, our restaurant is a haven for food enthusiasts and casual diners alike.`);

    const twoP = createPar(`Our journey began with a simple vision: to bring the authentic flavors of Italy to our community. Our chefs, with their rich culinary heritage and innovative spirit, craft each dish with the finest ingredients, ensuring that every meal is a celebration of taste and tradition.`);

    const threeP = createPar(`At My Restaurant, we believe that dining is more than just eating; it’s about creating memories. Our warm and inviting atmosphere, coupled with our attentive and friendly staff, makes every visit special. Whether you’re here for a romantic dinner, a family gathering, or a celebration with friends, we strive to make your experience exceptional.`)

    const fourP = createPar(`We take pride in our menu, which features a delightful array of appetizers, main courses, and desserts, all inspired by the rich culinary traditions of Italy. From our signature pasta dishes to our delectable seafood and mouth-watering desserts, there’s something for everyone to enjoy.`);
    
    const fiveP = createPar(`Join us at My Restaurant and let us take you on a culinary journey that you’ll cherish forever. We look forward to welcoming you and making your dining experience truly extraordinary`);

    content.appendChild(img);
    content.appendChild(title);
    content.appendChild(oneP);
    content.appendChild(twoP);
    content.appendChild(threeP);
    content.appendChild(fourP);
    content.appendChild(fiveP);

}