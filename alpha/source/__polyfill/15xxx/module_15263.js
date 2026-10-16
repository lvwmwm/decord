// Module ID: 15263
// Function ID: 15264
// Dependencies: [15248]

// Module 15263
import _mod15248 from "module_15248" /* 15248 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15248((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
