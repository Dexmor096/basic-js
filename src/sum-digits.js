const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const stringArray = ((n+'').split(''))
  const numberArray =stringArray.map(el => Number(el))
  console.log(numberArray);
  const res = numberArray.reduce((sum, current)=> sum += current)
  console.log(res);
  
  if(res < 10) {
    return res;
  } else {
    const newStringArr = ((res+'').split(''));
    const newNumberArray = newStringArr.map(el => Number(el))
    console.log(newNumberArray);
    
    const summary = newNumberArray.reduce((sum,item)=> sum + item)
    return summary
  }
    // remove line with error and write your code he
  }


module.exports = {
  getSumOfDigits
};
