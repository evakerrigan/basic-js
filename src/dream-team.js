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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

/*  for (i = 0; i < members.length; i++) {
    if (members[i] === !'string') {
      return false;
    }
    else {
      const names = members.filter(elements => typeof elements === 'string');
      const teamName = names.map(names => names[0].toUpperCase()).sort().join('');
      return teamName;
    }
  }
*/

  if (!Array.isArray(members)) return false

  const names = members.filter(elements => typeof elements === 'string');

  const teamName = names.map(names => names.trim()[0].toUpperCase()).sort().join('')
  
  return teamName;
  

}

module.exports = {
  createDreamTeam
};
