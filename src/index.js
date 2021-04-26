const { isCardNumberValid } = require('./isCardNumberValid');
const { getCardProvider } = require('./getCardProvider')

module.exports.checkCardnumber = (cardNumber) => {
    
    if(typeof cardNumber === 'string'){
        cardNumber = parseInt([...cardNumber]
            .filter((el) => (el !== ' ') & (el !== '-'))
            .join(''));
    } else if (typeof cardNumber !== 'number') {
        throw new Error('The data type is invalid');
    } 

    return isCardNumberValid(cardNumber) ? getCardProvider(cardNumber) : 'Incorrect number';
}

document.addEventListener('DOMContentLoaded', () => {

    const inputData = document.querySelector('.card-checker__input--js');
    const info = document.querySelector(".card-checker__info-bar__content--js");
    const btn = document.querySelector(".card-checker__button--js");

    btn.addEventListener('click', showCheckCard);

    function showCheckCard(){
        info.textContent = `Your card is: ${checkCardnumber(inputData.value)}`;
    }
})
