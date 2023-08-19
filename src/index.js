import './style.css';
import header from './header.js';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

document.body.appendChild(header());
const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

content.appendChild(home());
document.querySelector('.tab').classList.add('active-tab');

const tabList = Array.from(document.querySelectorAll('.tab'));
tabList.forEach((tab) => {
  tab.addEventListener('click', (e) => {

    content.innerHTML = "";
    if (e.target.textContent === 'Home') {
      content.appendChild(home());

    } else if (e.target.textContent === 'Menu') {
      content.appendChild(menu());

    } else if (e.target.textContent === 'About') {
      content.appendChild(about());

    }
    tabList.forEach((item) => {
      item.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  })
});
