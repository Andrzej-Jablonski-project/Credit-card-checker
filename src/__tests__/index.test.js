const { check } = require('prettier');
const { checkCardnumber } = require('../index');

test('should be Mastercard', () => {
    const cardNumber = '5555555555554444';
    const result = checkCardnumber(cardNumber);
    expect(result).toBe('Mastercard');
});

test('should be Visa', () => {
    const cardNumber = '4111111111111111';
    const result = checkCardnumber(cardNumber);
    expect(result).toBe('Visa');
});

test('should be American Express', () => {
    const cardNumber = '371449635398431';
    const result = checkCardnumber(cardNumber);
    expect(result).toBe('American Express');
});

test('cannot recognize the card provider', () => {
    const cardNumber = '6011111111111117';
    const result = checkCardnumber(cardNumber);
    expect(result).toBe('Cannot recognize card provider');
});

test('should be the wrong card number', () => {
    const cardNumber = '3530121333300000';
    const result = checkCardnumber(cardNumber);
    expect(result).toBe('Incorrect number');
});

test('should throw if the data type is invalid', () => {
    const cardNumber = [3530121333300000];
    expect(() => {
        checkCardnumber(cardNumber);
    }).toThrow('The data type is invalid');
});