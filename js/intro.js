let intro = document.querySelector('.intro');
let logo = document.querySelector('.logos');
let logoSpan = document.querySelectorAll('.marca');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((h4, index) => {
            setTimeout(() => {
                h4.classList.add('active');
            }, (index + 1) * 100);
        });

        setTimeout(() => {
            logoSpan.forEach((h4, index) => {
                setTimeout(() => {
                    h4.classList.remove('active');
                    h4.classList.add('fade');
                }, (h4 + 1) * 50);
            });
        }, 8000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2000);

        });
    })