// Module ID: 14081
// Function ID: 14082
// Dependencies: [14066]

// Module 14081
import _mod14066 from "module_14066" /* 14066 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14066((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
