// Module ID: 14400
// Function ID: 14401
// Dependencies: [14385]

// Module 14400
import _mod14385 from "module_14385" /* 14385 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14385((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
