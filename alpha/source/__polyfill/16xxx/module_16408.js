// Module ID: 16408
// Function ID: 16409
// Dependencies: [16393]

// Module 16408
import _mod16393 from "module_16393" /* 16393 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16393((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
