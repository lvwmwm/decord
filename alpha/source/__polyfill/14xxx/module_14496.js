// Module ID: 14496
// Function ID: 14497
// Dependencies: [14481]

// Module 14496
import _mod14481 from "module_14481" /* 14481 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14481((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
