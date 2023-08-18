import chefImage from './chef.jpg';

export default function home() {
  const main = document.createElement('main');
  const contentPara1 = document.createElement('p');
  const chef = new Image();
  const contentPara2 = document.createElement('p');

  
  main.classList.add('main');
  
  contentPara1.textContent = 'Best Pizza';
  chef.src = chefImage;
  contentPara2.textContent = 'Order Now!';
  
  
  main.appendChild(contentPara1);
  main.appendChild(chef);
  main.appendChild(contentPara2);

  return main;
}