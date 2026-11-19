// Module ID: 15473
// Function ID: 15474
// Dependencies: [15458]

// Module 15473
import _mod15458 from "module_15458" /* 15458 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15458((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
