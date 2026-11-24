// Module ID: 15581
// Function ID: 15582
// Dependencies: [15566]

// Module 15581
import _mod15566 from "module_15566" /* 15566 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15566((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
