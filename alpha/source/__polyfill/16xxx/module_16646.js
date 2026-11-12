// Module ID: 16646
// Function ID: 16647
// Dependencies: [16631]

// Module 16646
import _mod16631 from "module_16631" /* 16631 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16631((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
