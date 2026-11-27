// Module ID: 15761
// Function ID: 15762
// Dependencies: [15746]

// Module 15761
import _mod15746 from "module_15746" /* 15746 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15746((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
