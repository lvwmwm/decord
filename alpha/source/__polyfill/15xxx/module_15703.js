// Module ID: 15703
// Function ID: 15704
// Dependencies: [15688]

// Module 15703
import _mod15688 from "module_15688" /* 15688 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15688((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
