'use strict';

{
  const menuItems = document.querySelectorAll('.menu ul li a');
  const contents = document.querySelectorAll('.content');
  const navItems = document.querySelectorAll('.nav-items .nav-item');
  const spMenu = document.querySelector('.sp-menu');
  const spOverlay = document.querySelector('.sp-overlay');

  const switchTab = (id) => {
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
    contents.forEach((content) => {
      content.classList.remove('active');
    });

    document.querySelector(`.menu ul li a[data-id="${id}"]`).classList.add('active');
    document.querySelector(`#${id}`).classList.add('active');
  }

  menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(item.dataset.id);
      item.classList.add('active');
    });
  });

  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      switchTab(item.dataset.id);
    });
  });

  spMenu.addEventListener('click', () => {
    spMenu.classList.toggle('open');
    spOverlay.classList.toggle('open');
  });

  // menuItem.forEach((item) => {
  //   item.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     menuItem.forEach((item) => {
  //       item.classList.remove('active');
  //     });
  //     item.classList.add('active');

  //     contents.forEach((content) => {
  //       content.classList.remove('active');
  //     });
  //     document.querySelector('#' + item.dataset.id).classList.add('active');
  //   });
  // });
}