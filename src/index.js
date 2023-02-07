const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let decoded = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substring(i, i + 10));
    }
    
    arr.forEach(element => {
        let character = element
        .replaceAll('00', '')
        .replaceAll('10', '.')
        .replaceAll('11', '-')
        if (character == '**********') {
            decoded.push(' ')
        } else {
        decoded.push(MORSE_TABLE[character]);
        }
    })

    return decoded.join('');
}

module.exports = {
    decode
}
