// Module ID: 15374
// Function ID: 15375
// Dependencies: [15359]

// Module 15374
import _mod15359 from "module_15359" /* 15359 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15359((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
