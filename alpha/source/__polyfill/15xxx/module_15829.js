// Module ID: 15829
// Function ID: 15830
// Dependencies: [15814]

// Module 15829
import _mod15814 from "module_15814" /* 15814 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15814((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
