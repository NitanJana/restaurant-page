export default function card(imageSrc, nameContent, priceContent) {

  const card = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('div');
  const price = document.createElement('div');

  card.classList.add('card');
  image.classList.add('card-image');
  name.classList.add('card-name');
  price.classList.add('card-price');

  image.src = imageSrc;
  name.textContent = nameContent;
  price.textContent = priceContent;

  card.append(image, name, price);
  return card;
}