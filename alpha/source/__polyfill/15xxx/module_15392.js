// Module ID: 15392
// Function ID: 15393
// Dependencies: [15377]

// Module 15392
import _mod15377 from "module_15377" /* 15377 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15377((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
