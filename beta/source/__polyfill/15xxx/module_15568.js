// Module ID: 15568
// Function ID: 15569
// Dependencies: [15553]

// Module 15568
import _mod15553 from "module_15553" /* 15553 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15553((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
