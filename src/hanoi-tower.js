const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = 1;
  for (let i = 1; i < disksNumber; i++){
      turn *= 2;
      turn++ 
      console.log(turn);
  }
  let turnSeconds= turnsSpeed / 3600;
  let sec = Math.floor(turn/ turnSeconds);
console.log(sec);
  
  return {
    'turns': turn,
    'seconds': sec
}

}

module.exports = {
  calculateHanoi
};
