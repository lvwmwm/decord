// Module ID: 16771
// Function ID: 16772
// Dependencies: [16756]

// Module 16771
import _mod16756 from "module_16756" /* 16756 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16756((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
