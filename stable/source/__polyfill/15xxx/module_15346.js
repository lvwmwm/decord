// Module ID: 15346
// Function ID: 15347
// Dependencies: [15331]

// Module 15346
import _mod15331 from "module_15331" /* 15331 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15331((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
