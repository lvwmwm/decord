// Module ID: 15558
// Function ID: 15559
// Dependencies: [15543]

// Module 15558
import _mod15543 from "module_15543" /* 15543 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15543((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
