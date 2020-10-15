/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits.reverse()
    digits[0] += 1

    for( i = 0; i < digits.length; i++) {
        
        if (digits[i] > 9) {
            digits[i] = 0
            if (!digits[i + 1]) {
                digits[i + 1] = 1
            } else {
                digits[i + 1] += 1
            }
            
        } 
    }
    
    return digits.reverse()
};