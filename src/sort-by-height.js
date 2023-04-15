const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let tempArr = [];
    let newArr = [];
    tempArr = arr.filter(item => item !== -1).sort((a,b) => b - a)
    console.log(tempArr)
    for(let i =0; i < arr.length; i++){
      console.log(arr[i])
      if(arr[i] === -1){
        newArr.push(-1)
        console.log(newArr);
      } 
      else {
        newArr.push(tempArr.pop())
      }
      console.log(newArr);
      
    }
    return newArr
}


module.exports = {
  sortByHeight
};
