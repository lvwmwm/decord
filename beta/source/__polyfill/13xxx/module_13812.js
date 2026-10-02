// Module ID: 13812
// Function ID: 13813
// Dependencies: [13797]

// Module 13812
import _mod13797 from "module_13797" /* 13797 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod13797((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
