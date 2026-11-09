// Module ID: 16463
// Function ID: 16464
// Dependencies: [16448]

// Module 16463
import _mod16448 from "module_16448" /* 16448 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16448((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
