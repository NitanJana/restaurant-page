import chefImage from './chef.jpg';

export default function home() {
  const home = document.createElement('main');
  const content = document.createElement('content');
  const contentPara1 = document.createElement('p');
  const chef = new Image();
  const contentPara2 = document.createElement('p');

  
  home.classList.add('main');
  content.classList.add('content');
  
  contentPara1.textContent = 'Best Pizza';
  chef.src = chefImage;
  contentPara2.textContent = 'Order Now!';
  
  home.appendChild(content);
  content.appendChild(contentPara1);
  content.appendChild(chef);
  content.appendChild(contentPara2);

  return home;
}