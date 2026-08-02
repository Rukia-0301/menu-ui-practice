'use strict';

{
  const menuItem = document.querySelectorAll('.menu ul li a');
  const contents = document.querySelectorAll('.content');

  menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuItem.forEach((item) => {
        item.classList.remove('active');
      });
      item.classList.add('active');

      contents.forEach((content) => {
        content.classList.remove('active');
      });
      document.querySelector('#' + item.dataset.id).classList.add('active');
    });
  });
}