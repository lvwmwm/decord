// Module ID: 16145
// Function ID: 16146
// Dependencies: [16130]

// Module 16145
import _mod16130 from "module_16130" /* 16130 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16130((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
