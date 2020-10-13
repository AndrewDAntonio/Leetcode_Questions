/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let wordArr = s.trim().split(' ')
    const lastWord = wordArr[wordArr.length - 1]
    return lastWord.length
};