// Module ID: 15437
// Function ID: 15438
// Dependencies: [15422]

// Module 15437
import _mod15422 from "module_15422" /* 15422 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15422((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
