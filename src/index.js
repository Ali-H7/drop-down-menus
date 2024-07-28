import './style.css';

function dropDownMenu(menuContainer, menuItemsClass) {
  const container = document.querySelector(menuContainer);
  const menuItems = document.querySelector(menuItemsClass);
  menuItems.style.display = 'none';

  container.addEventListener('mouseover', (e) => {
    menuItems.style.display = 'block';
  });

  container.addEventListener('mouseleave', (e) => {
    menuItems.style.display = 'none';
  });
}

dropDownMenu('.menu-container', '.menu-items');
