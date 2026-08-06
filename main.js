'use strict';

{
  const menuItems = document.querySelectorAll('.profile__tab-menu ul li a');
  const contents = document.querySelectorAll('.profile__content');
  const navItems = document.querySelectorAll('.nav-items .nav-item');
  const spMenu = document.querySelector('.sp-menu');
  const spOverlay = document.querySelector('.sp-overlay');
  const works = document.querySelector('.works__wrapper');
  const worksMoreBtn = document.querySelector('.works__more-btn button');

  const switchTab = (id) => {
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
    contents.forEach((content) => {
      content.classList.remove('active');
    });

    document.querySelector(`.profile__tab-menu ul li a[data-id="${id}"]`).classList.add('active');
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

  worksMoreBtn.addEventListener('click', () => {
    works.classList.toggle('open');
    worksMoreBtn.textContent = works.classList.contains('open') ? 'View less' : 'View more';
  });
}