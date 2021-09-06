const respMenu = document.getElementById('resp-menu');
const menuUL = document.getElementById('nav-ul');
const menuItem = document.getElementsByClassName('menu-item');

respMenu.addEventListener('click', () => {
    menuUL.classList.toggle('show');
});


for ( let i = 0; i < menuItem.length; i++ ) {
    menuItem[i].addEventListener('click', () => {
    menuUL.classList.toggle('show');
    });
}
