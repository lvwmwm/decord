// Module ID: 16150
// Function ID: 16151
// Dependencies: [16135]

// Module 16150
import _mod16135 from "module_16135" /* 16135 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16135((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
