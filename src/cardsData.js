const cards = {
    mastercard:{ 
        name: 'Mastercard',
        numbersLength: [16],
        prefix: ['22','51','52','53','54','55'],
    },
    visa:{ 
        name: 'Visa',
        numbersLength: [13, 16],
        prefix: ['4'],
    },
    ae:{ 
        name: 'American Express',
        numbersLength: [15],
        prefix: ['34','37'],
    },
}

export { cards };