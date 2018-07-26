import './index.css';
import numeral from 'numeral';

/* eslint-disable no-console */

const courseVal = numeral(1000).format('$0,0.00');
debugger;//eslint-disable-line
console.log(`I would like to pay ${courseVal} for this awesome course!`);