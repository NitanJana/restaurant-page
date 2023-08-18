import './style.css';
import header from './header.js';
import home from './home.js';

document.body.appendChild(header());
document.body.appendChild(home());

const tabList = Array.from(document.querySelectorAll('.tab'));
tabList.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tabList.forEach((item) => {
      item.classList.remove('active-tab');
    });
    tab.classList.add('active-tab');
    console.log(e.target.textContent);
  })
});
