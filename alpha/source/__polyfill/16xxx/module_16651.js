// Module ID: 16651
// Function ID: 16652
// Dependencies: [16636]

// Module 16651
import _mod16636 from "module_16636" /* 16636 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16636((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
