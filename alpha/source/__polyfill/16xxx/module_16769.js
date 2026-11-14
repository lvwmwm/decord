// Module ID: 16769
// Function ID: 16770
// Dependencies: [16754]

// Module 16769
import _mod16754 from "module_16754" /* 16754 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16754((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
