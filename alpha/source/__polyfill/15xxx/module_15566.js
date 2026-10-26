// Module ID: 15566
// Function ID: 15567
// Dependencies: [15551]

// Module 15566
import _mod15551 from "module_15551" /* 15551 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15551((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
