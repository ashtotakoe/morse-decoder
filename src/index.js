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
    let count = 0
    let tempArr = []
    let bigTempArr = []
    let bigArr = []
    let enourmousTempArr = []
    for (let i = 0; i < expr.length; i++){
        tempArr.push(expr[i])
        count++
        if (count === 10){
            bigArr.push(tempArr)
            tempArr = []
            count = 0
        }
    }
    
    
    bigArr.forEach(letter => {
        let temp = 0
        bigTempArr = []
       
        
        for (let i = 0; i < letter.length; i++){
            
            if (letter[i] === '1'){
                temp++
                
                tempArr.push(letter[i])
                

                if (letter[i+1] === '0'){
                    tempArr.push(letter[i+1])
                    temp++
                }

                if (temp % 2 == 0){
                    
                    bigTempArr.push(tempArr)
                    tempArr = []
                    
                    
                }
                
            }
            console.log(bigTempArr)
        }
        console.log(bigTempArr)
        enourmousTempArr.push(bigTempArr)
        
    });
    console.log(enourmousTempArr.length)
    let bigStr = ''
    enourmousTempArr.forEach(elem => {
        let str =''
        console.log(elem)
        for (let unit of elem){
            unit = unit.join('')
            if (unit === '11'){
                str += '-'
            }
            else{
                str += '.'
            }
            console.log(MORSE_TABLE[str])
            
        }
        bigStr += MORSE_TABLE[str]
        
    })
    console.log(bigStr);
    
    return bigStr
}

module.exports = {
    decode
}