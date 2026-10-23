// Module ID: 15542
// Function ID: 15543
// Dependencies: [15527]

// Module 15542
import _mod15527 from "module_15527" /* 15527 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15527((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
