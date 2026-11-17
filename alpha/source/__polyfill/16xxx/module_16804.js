// Module ID: 16804
// Function ID: 16805
// Dependencies: [16789]

// Module 16804
import _mod16789 from "module_16789" /* 16789 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16789((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
