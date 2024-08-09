
var menu = document.getElementById('menuList');

function toggleMenu() {
    var ismobile = window.matchMedia('(max-width:767px)').matches;

    if (ismobile) {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    } else {
        menu.style.display = 'none';
    }
}