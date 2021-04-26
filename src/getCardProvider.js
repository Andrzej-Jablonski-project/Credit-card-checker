const { cards } = require('./cardsData');

const allNumbersCardsLength = [];

for (const value of Object.values(cards)){
    value.numbersLength.forEach((digit) => allNumbersCardsLength.push(digit));
}

const allUniqueNumbersCardsLength = [...new Set(allNumbersCardsLength)];

function checkCardNumbersLength(cardNumber){
    let isVerifyLength = false;
    allUniqueNumbersCardsLength.forEach((digit) => { if(cardNumber.toString().length === digit){ isVerifyLength = true } });
    return isVerifyLength;
}


module.exports.getCardProvider = (cardNumber) => {
    let isProvider = 'Cannot recognize card provider';

    for (const value of Object.values(cards)){
        if(verifyProvider(value.prefix)){ return isProvider = value.name; }
    }
    
    function verifyProvider(startOfDigits){
        let result = false;
        startOfDigits.forEach((digit) => {
            const isVerify = cardNumber.toString().startsWith(digit);
            if(isVerify) { result = true; };
        })
        return result;
    }
    return checkCardNumbersLength(cardNumber) ? isProvider : 'Cannot recognize card provider';
}