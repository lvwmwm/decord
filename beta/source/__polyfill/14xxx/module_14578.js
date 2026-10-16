// Module ID: 14578
// Function ID: 14579
// Dependencies: [14563]

// Module 14578
import _mod14563 from "module_14563" /* 14563 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14563((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
