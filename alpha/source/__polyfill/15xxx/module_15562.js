// Module ID: 15562
// Function ID: 15563
// Dependencies: [15547]

// Module 15562
import _mod15547 from "module_15547" /* 15547 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15547((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
