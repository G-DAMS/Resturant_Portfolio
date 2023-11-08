const burgar = document.querySelector('#burgar');
const menu = document.querySelector('#menu');

burgar.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});


alert(hell)