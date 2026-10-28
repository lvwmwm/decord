// Module ID: 15601
// Function ID: 15602
// Dependencies: [15586]

// Module 15601
import _mod15586 from "module_15586" /* 15586 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15586((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
