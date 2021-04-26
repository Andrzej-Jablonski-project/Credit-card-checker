// eslint-disable-next-line no-undef
const { checkCardNumber } = require('./checkCardNumber');

document.addEventListener('DOMContentLoaded', () => {

    const inputData = document.querySelector('.card-checker__input--js');
    const info = document.querySelector(".card-checker__info-bar__content--js");
    const btn = document.querySelector(".card-checker__button--js");

    btn.addEventListener('click', showCheckCard);

    function showCheckCard(event){
        event.preventDefault();
        info.textContent = `Your card is: ${checkCardNumber(inputData.value)}`;
    }
})
