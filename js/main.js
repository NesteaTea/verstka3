let openBtnMore = document.querySelector('.services-btn');
let servicesCardActive = document.querySelector('.card-list');
let btnTextServices = openBtnMore.querySelector('.ready-more');

openBtnMore.addEventListener('click', function() {
    servicesCardActive.classList.toggle('open');
    openBtnMore.classList.toggle('open');

    if(openBtnMore.classList.contains('open')) {
        btnTextServices.textContent = 'Скрыть';
    } else {
        btnTextServices.textContent = 'Показать все';
    }
});