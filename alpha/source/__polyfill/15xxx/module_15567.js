// Module ID: 15567
// Function ID: 15568
// Dependencies: [15552]

// Module 15567
import _mod15552 from "module_15552" /* 15552 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15552((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
