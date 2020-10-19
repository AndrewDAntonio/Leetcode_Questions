/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = []
    
    result[0] = 1
    result[1] = 1
    
    for (i = 2; i <= n; i ++) {
        
        result[i] = result[i -1] + result[i -2]
    }
    
    return result[n]
};