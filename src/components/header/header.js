document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('.header');
  let newElement = document.createElement('a');
  newElement.text = 'asd';
  header.appendChild(newElement);
})
