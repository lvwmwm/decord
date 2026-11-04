// Module ID: 16395
// Function ID: 16396
// Dependencies: [16380]

// Module 16395
import _mod16380 from "module_16380" /* 16380 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16380((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
