// Module ID: 16490
// Function ID: 16491
// Dependencies: [16475]

// Module 16490
import _mod16475 from "module_16475" /* 16475 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16475((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
