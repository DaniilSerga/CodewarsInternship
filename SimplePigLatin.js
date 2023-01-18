/* Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

//========================================================================================================

// Expected: igPay atinlay siay oolcay
console.log(pigIt('Pig latin is cool'));
// Expected: elloHay orldway !
console.log(pigIt('Hello world !'));
// Expected: hisTay siay ymay tringsay
console.log(pigIt('This is my string'));
// Expected: aveHay ouyay eardhay ? oNay ?
console.log(pigIt('Have you heard ? No ?'));

/**
 * Возвращает sentence, переведённую в PigLatin
 * 
 * @param {string} sentence Строка, которую необходимо перевести в PigLatin 
 * @returns {string} sentence, переведённая в PigLatin
 */
function pigIt(sentence) {
    return sentence.split(' ')
                   .map((word) => word.match(/[!.,)(-?]/) ?  word : word.slice(1) + word[0] + 'ay' )
                   .join(' ');
}

