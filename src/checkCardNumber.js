// eslint-disable-next-line no-undef
const { isCardNumberValid } = require('./isCardNumberValid');
// eslint-disable-next-line no-undef
const { getCardProvider } = require('./getCardProvider')

// eslint-disable-next-line no-undef
module.exports.checkCardNumber = (cardNumber) => {
    
    if(typeof cardNumber === 'string'){
        cardNumber = parseInt([...cardNumber]
            .filter((el) => (el !== ' ') & (el !== '-'))
            .join(''));
    } else if (typeof cardNumber !== 'number') {
        throw new Error('The data type is invalid');
    } 

    return isCardNumberValid(cardNumber) ? getCardProvider(cardNumber) : 'Incorrect number';
}