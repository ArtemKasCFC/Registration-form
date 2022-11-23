import RandomInt from "./randomInt";
const randomInt = new RandomInt()
class Random {

    nameSurname(min, max) {
        
        const quantity = randomInt.getRandomInt(min,max)

        let text = "",
            symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_.",
            i = 0

        for (i; i < quantity; i++)
            text += symbols.charAt(Math.floor(Math.random() * symbols.length));

        const spaceFirst = /^\s/,
              specSymbFirstLast = /(^[\._-])|([\._-]$)/,
              specSymbInARow = /([\._-]{2})/

        if (text.match(spaceFirst) || text.match(specSymbFirstLast) || text.match(specSymbInARow)) {
            return this.nameSurname(min, max)
        } else {
            return text;
        }
    }

    email(min1, max1, min2, max2, min3, max3){

        const quantityOne = randomInt.getRandomInt(min1,max1),
              quantityTwo = randomInt.getRandomInt(min2,max2),
              quantityThree = randomInt.getRandomInt(min3,max3);
    
        let textOne = "",
            textTwo = "",
            textThree = "",
            textTotal = "",
            symbolsOne = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.",
            symbolsTwo = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-",
            symbolsThree = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
        function createText(text, quantity, symbols) {
            for (let i = 0; i < quantity; i++) {
                text += symbols.charAt(Math.floor(Math.random() * symbols.length))
            }
            return text
        }
    
        textOne = createText(textOne, quantityOne, symbolsOne)
        textTwo = createText(textTwo, quantityTwo, symbolsTwo)
        textThree = createText(textThree, quantityThree, symbolsThree)
        
    
        textTotal = `${textOne}@${textTwo}.${textThree}`
    
        const specSymbFirstEnd = /(^\W)|(\W$)/,
              specSymbInARow = /\W{2}/
    
        if (textTotal.match(specSymbFirstEnd) || textTotal.match(specSymbInARow)) {
            return this.email(min1, max1, min2, max2, min3, max3)
        } else {
            return textTotal;
        }
    }
    

    password(min, max) {

        const quantity = randomInt.getRandomInt(min,max)

        let text = "",
            symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@."


        for (let i = 0; i < quantity; i++) {
            text += symbols.charAt(Math.floor(Math.random() * symbols.length))
        }


        const mustSpecSymb = /@|!|\./,
              mustUpperCase = /[A-Z]/,
              mustLowerCase = /[a-z]/,
              mustNumber = /\d/

        if (text.match(mustSpecSymb) && text.match(mustUpperCase) && text.match(mustLowerCase) && text.match(mustNumber)) {
            return text;
        } else {
            return this.password(min, max);
        }
    }
}

export default Random;