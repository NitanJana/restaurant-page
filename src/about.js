export default function about() {
  const about = document.createElement('main');
  const phone = document.createElement('div');
  const address = document.createElement('div');

  about.classList.add('about');
  phone.classList.add('about-phone');
  address.classList.add('about-address');

  phone.textContent = '+91 1234566789';
  address.textContent = '96938 Lysanne Union,North Carolina';

  about.append(phone, address);
  

  return about;
}