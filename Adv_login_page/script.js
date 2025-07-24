const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});