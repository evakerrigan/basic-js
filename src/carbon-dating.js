const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') {

    console.log('false это не строка');
    return false;

  } else {
const NumbersampleActivity = Number(sampleActivity);

console.log('-----------------------------');
console.log('sampleActivity =', sampleActivity);

console.log('typeof sampleActivity =', typeof sampleActivity);

  if (!isNaN(sampleActivity)) {

    const NumbersampleActivity = Number(sampleActivity);
    console.log('NumbersampleActivity =', NumbersampleActivity);

  if(Math.sign(NumbersampleActivity) == '-1') {

    console.log('Math.sign(NumbersampleActivity) =', Math.sign(NumbersampleActivity));

    console.log('false число отрицательное');
    return false;

  } else if (NumbersampleActivity == '0') {

    console.log('false число равно 0');
    return false;

  } else {

    const t = (Math.log(NumbersampleActivity/MODERN_ACTIVITY) * HALF_LIFE_PERIOD)/0.693;
    console.log('t =', t);
    const t2 = Math.ceil(-t);
    console.log('t2 =', t2);
    if(Math.sign(t2) == '-1') {

      console.log('false лаборант ошибся');
      return false;
    }

    return t2;

  }

} else {
    console.log('false не число')
    return false;
}
}

}


module.exports = {
  dateSample
};
