// Module ID: 16493
// Function ID: 16494
// Dependencies: [16478]

// Module 16493
import _mod16478 from "module_16478" /* 16478 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16478((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
