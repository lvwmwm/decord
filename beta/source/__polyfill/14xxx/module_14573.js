// Module ID: 14573
// Function ID: 14574
// Dependencies: [14558]

// Module 14573
import _mod14558 from "module_14558" /* 14558 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14558((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
