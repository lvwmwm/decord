// Module ID: 16105
// Function ID: 16106
// Dependencies: [16090]

// Module 16105
import _mod16090 from "module_16090" /* 16090 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16090((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
