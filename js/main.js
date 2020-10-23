window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.sidebar'),
    burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('sidebar_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      burger.classList.toggle('burger_active');
      menu.classList.toggle('sidebar_active');
    })
  })
})