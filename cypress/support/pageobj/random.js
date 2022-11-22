class Random {

    nameSurname(quantity) {

        let text = "",
            symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_.",
            i = 0

        for (i; i < quantity; i++)
            text += symbols.charAt(Math.floor(Math.random() * symbols.length));

        const spaceFirst = /^\s/,
              specSymbFirstLast = /(^[\._-])|([\._-]$)/,
              specSymbInARow = /([\._-]{2})/

        if (text.match(spaceFirst) || text.match(specSymbFirstLast) || text.match(specSymbInARow)) {
            return this.nameSurname(quantity)
        } else {
            return text;
        }
    }

    email(quantityOne, quantityTwo, quantityThree) {

        let textOne = "",
            textTwo = "",
            textThree = "",
            textTotal = "",
            symbols = "abcdefghijklmnopqrstuvwxyz0123456789-."

        function createText(text, quantity) {
            for (let i = 0; i < quantity; i++) {
                text += symbols.charAt(Math.floor(Math.random() * symbols.length))
            }
            return text
        }

        textOne = createText(textOne, quantityOne)
        textTwo = createText(textTwo, quantityTwo)
        textThree = createText(textThree, quantityThree)

        let regexpOne = /\./

        while (textTwo.match(regexpOne)) {
            textTwo = ''
            textTwo = createText(textTwo, quantityTwo)
        }

        let regexpTwo = /\d|[-\.]/

        while (textThree.match(regexpTwo)) {
            textThree = ''
            textThree = createText(textThree, quantityThree)
        }

        textTotal = `${textOne}@${textTwo}.${textThree}`

        const specSymbFirstEnd = /(^\W)|(\W$)/,
              specSymbInARow = /\W{2}/

        if (textTotal.match(specSymbFirstEnd) || textTotal.match(specSymbInARow)) {
            return this.email(quantityOne, quantityTwo, quantityThree)
        } else {
            return textTotal;
        }
    }

    password(quantity) {

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
            return this.password(quantity);
        }
    }
}

export default Random;