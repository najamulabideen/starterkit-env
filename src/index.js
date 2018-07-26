import './index.css';
import numeral from 'numeral';

const courseVal = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would like to pay ${courseVal} for this awesome course!`);