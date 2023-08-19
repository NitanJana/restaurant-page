import pizza1 from './pizza1.jpg';

import card from "./card.js";

export default function menu() {
  const menu = document.createElement('main');

  menu.classList.add('menu');
  menu.appendChild(card(pizza1,'pepper','50$'))
  menu.appendChild(card(pizza1,'pepper','50$'))
  menu.appendChild(card(pizza1,'pepper','50$'))
  menu.appendChild(card(pizza1,'pepper','50$'))
  menu.appendChild(card(pizza1,'pepper','50$'))
  menu.appendChild(card(pizza1,'pepper','50$'))
  

  return menu;
}