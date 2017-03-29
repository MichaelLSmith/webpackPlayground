require("./style.css");
import {a, fetchJokes, testFunc} from './fetch';

let funcCall = testFunc();
console.log(funcCall);
console.log(a);


console.log('line 7');

fetchJokes().then((result) => {
  console.log(result);
})


document.write(require("./content.js"));
