function isCardNumberValid(cardNumber){
    const numberReverse = arrayOfDigits(cardNumber).reverse();
    const result = calculateEvenIndex(numberReverse) + calculateOddIndex(numberReverse);
    return result % 10 === 0;
}

function arrayOfDigits(cardNumber){
    return [...cardNumber.toString()].map((digit) => Number(digit));
}

function calculateEvenIndex(digits){
    const digitsEvenIndex = digits.filter((digit, index) => index % 2 === 0);
    return sumOfDigits(digitsEvenIndex);
}

function calculateOddIndex(digits){
    const digitsOddIndex = digits.filter((digit, index) => index % 2 === 1);
    const result = digitsOddIndex.map((digit) => (digit * 2 >= 10)
        ? Math.floor(digit * 2 / 10) + (digit * 2 % 10) 
        : digit * 2)
    return sumOfDigits(result);
}

function sumOfDigits(digits){
    return digits.reduce((curr, next) => curr + next, 0);
}

export { isCardNumberValid };