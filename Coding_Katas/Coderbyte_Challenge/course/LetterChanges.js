let R = require('ramda')

let plusCase = (alphabet) => {
    let dictionary = 'abcdefghijklmnopqrstuvwxyza',
	position = dictionary.indexOf(alphabet)

    return dictionary[position + 1]  
}

let getVowel = (alphabet) => 'aiueo'.indexOf(alphabet) !== -1 ?
				    alphabet.toUpperCase() :
				    alphabet

let LetterChanges = R.compose(R.map(getVowel),R.map(plusCase))


console.log(LetterChanges('test'))
