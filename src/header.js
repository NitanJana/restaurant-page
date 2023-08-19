export default function header() {

  const header = document.createElement('header');
  const headingMain = document.createElement('h1');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const tab3 = document.createElement('li');
  const tabList = document.createElement('ul');
  const navbar = document.createElement('nav');

  header.classList.add('header');
  headingMain.classList.add('heading-main');
  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');
  tabList.classList.add('tabList');
  navbar.classList.add('nav');

  tab1.setAttribute('data-active','active')
  
  headingMain.textContent = 'Pizza.com';
  tab1.textContent = 'Home';
  tab2.textContent = 'Menu';
  tab3.textContent = 'About';
  
  header.append(headingMain,navbar);
  tabList.append(tab1,tab2,tab3);
  navbar.appendChild(tabList);

  return header;
 }