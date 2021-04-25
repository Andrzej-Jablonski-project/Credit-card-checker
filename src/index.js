import { isCardNumberValid } from './isCardNumberValid';
import { getCardProvider } from './getCardProvider';

function checkCardnumber(cardNumber){
    
    if(typeof cardNumber === 'string'){
        cardNumber = parseInt([...cardNumber]
            .filter((el) => (el !== ' ') & (el !== '-'))
            .join(''));
    } else if (typeof cardNumber !== 'number') {
        throw new Error('Incorrect number');
    } 

    return isCardNumberValid(cardNumber) ? getCardProvider(cardNumber) : 'Incorrect number';
}


const result = checkCardnumber(4532387988988077);
const result2 = checkCardnumber(5193080150954111);
const result3 = checkCardnumber(370144091492882);
const result4 = checkCardnumber(370145091492882);
const result5 = checkCardnumber('370-144091 492882');
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
