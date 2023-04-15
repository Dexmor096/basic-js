const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  console.debug(email)
  const toArray = email.split('').reverse()
  console.log(toArray)
  let dogIndex;
  dogIndex = toArray.findIndex( el => el === '@')
 console.log(dogIndex);
 return toArray.slice(0,dogIndex).reverse().join('')
}

module.exports = {
  getEmailDomain
};
