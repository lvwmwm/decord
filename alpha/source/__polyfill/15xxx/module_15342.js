// Module ID: 15342
// Function ID: 15343
// Dependencies: [15327]

// Module 15342
import _mod15327 from "module_15327" /* 15327 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15327((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
