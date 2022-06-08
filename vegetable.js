const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.querySelector('.navmenu');

toggleButton.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
})