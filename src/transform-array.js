const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  
  let resultArray = arr;
  console.debug(arr);
  if (!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!");}
  if(arr.length === 0) {return arr}
  if (arr.includes(doubleNext)) {
    
    const controlIndex = arr.findIndex(el => el === doubleNext)
    
    resultArray.splice(controlIndex, 1, resultArray[controlIndex + 1])
    
  }
  else if(arr.includes(doublePrev)) {
    const controlIndex = arr.findIndex(el => el === doublePrev)
    resultArray.splice(controlIndex, 1, resultArray[controlIndex - 1])
  }
  else if(arr.includes(discardNext)) {
    const controlIndex = arr.findIndex(el => el === discardNext)
    
    if(resultArray.length-1 !== controlIndex) {
      resultArray.splice(controlIndex, 2)
    } else {return resultArray}

  }
  else if(arr.includes(discardPrev)) {
    const controlIndex = arr.findIndex(el => el === discardPrev)
    
    if(resultArray[0] !== controlIndex) {
      resultArray.splice(controlIndex - 1, 2)
    } else {return resultArray}

  }
  
  return resultArray
  }

module.exports = {
  transform
};





