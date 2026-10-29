// Module ID: 16065
// Function ID: 16066
// Dependencies: [16050]

// Module 16065
import _mod16050 from "module_16050" /* 16050 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16050((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
