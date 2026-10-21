// Module ID: 15464
// Function ID: 15465
// Dependencies: [15449]

// Module 15464
import _mod15449 from "module_15449" /* 15449 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15449((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
