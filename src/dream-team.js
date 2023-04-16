const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.log(members);
  let stringArr = []
  let teamName =[] 
 //   const stringArray = members.filter(element => {typeof element === 'string'});
 // console.log(stringArray);
 if (Array.isArray(members)) {
 
 
   for(let i=0; i< members.length; i++) {
     if(typeof members[i] === 'string') {
       stringArr.push(members[i].trim().toUpperCase())
       
     } 
   }
 }
   console.log(stringArr.sort());
   stringArr.sort()
   // for(let i=0; i< members.length; i++) {
     
     // }
     stringArr.forEach(el => teamName.push(el[0]))
     console.log(teamName.join('').toString());
     
   if(Array.isArray(members) && members.length !==0) {
     return teamName.join('').toString().toUpperCase()
 } else  {return false}
}

module.exports = {
  createDreamTeam
};
