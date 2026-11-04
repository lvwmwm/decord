// Module ID: 16382
// Function ID: 16383
// Dependencies: [16367]

// Module 16382
import _mod16367 from "module_16367" /* 16367 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16367((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
