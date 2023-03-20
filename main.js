const btn = document.querySelector('.icon')
const logo = document.querySelector('.link')
const menu = document.querySelector('.menu')
const settings = document.getElementById('setting')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    if (btn.classList.contains('active')) {
        menu.style.width = '4.4rem';
        logo.style.opacity = '0';
    }
    else {
        menu.style.width = '13rem';
        logo.style.opacity = '1';
    }
})