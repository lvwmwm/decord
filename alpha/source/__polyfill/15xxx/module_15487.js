// Module ID: 15487
// Function ID: 15488
// Dependencies: [15472]

// Module 15487
import _mod15472 from "module_15472" /* 15472 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15472((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
