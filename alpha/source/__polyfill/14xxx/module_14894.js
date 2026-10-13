// Module ID: 14894
// Function ID: 14895
// Dependencies: [14879]

// Module 14894
import _mod14879 from "module_14879" /* 14879 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14879((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
