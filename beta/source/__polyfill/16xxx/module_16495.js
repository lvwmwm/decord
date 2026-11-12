// Module ID: 16495
// Function ID: 16496
// Dependencies: [16480]

// Module 16495
import _mod16480 from "module_16480" /* 16480 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16480((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
