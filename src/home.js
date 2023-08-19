import chefImage from './chef.jpg';

export default function home() {
  const home = document.createElement('main');
  const contentPara1 = document.createElement('p');
  const chef = new Image();
  const contentPara2 = document.createElement('p');

  
  home.classList.add('main');
  
  contentPara1.textContent = 'Best Pizza';
  chef.src = chefImage;
  contentPara2.textContent = 'Order Now!';
  
  
  home.append(contentPara1,chef,contentPara2);

  return home;
}