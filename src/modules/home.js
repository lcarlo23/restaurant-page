import home_bg from '../assets/images/home_bg.jpg';
import '../style.css';

export default function createHome() {

    const content = document.getElementById('content');

    content.textContent = '';

    const img = document.createElement('img');
    const title = document.createElement('h1');
    const desc = document.createElement('p');

    img.setAttribute('src', home_bg);
    img.setAttribute('width', '100%');
    title.textContent = 'My Restaurant Page';
    desc.textContent = `Welcome to our restaurant, where culinary 
    excellence meets a warm and inviting atmosphere. Our chefs craft 
    each dish with the finest ingredients, ensuring every bite is a 
    delightful experience. Whether you’re enjoying a romantic dinner 
    or a family gathering, our attentive staff and elegant ambiance 
    make every visit unforgettable. Come and savor the flavors that 
    make our restaurant truly exceptional.`;

    content.appendChild(img);
    content.appendChild(title);
    content.appendChild(desc);

}