/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

 **Complete** Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  **Complete** Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  **Complete** Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  **Complet** Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  **Complete** Step 5: return the menu component.

  **Complete** Step 6: add the menu component to the DOM.
  
*/
function createMenu(array) {
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');

  // add menu open with click
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    
  });
  

  // add items to the UL
  array.forEach(item => {
  const listItem = document.createElement('li');
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });

  
  menu.classList.add('menu');
  menu.appendChild(menuList);

  return menu;

};

const finalMenu = createMenu(menuItems);
document.querySelector('.header').appendChild(finalMenu);
