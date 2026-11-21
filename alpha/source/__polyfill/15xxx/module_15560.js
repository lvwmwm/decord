// Module ID: 15560
// Function ID: 15561
// Dependencies: [15545]

// Module 15560
import _mod15545 from "module_15545" /* 15545 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15545((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
