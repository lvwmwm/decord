// Module ID: 15603
// Function ID: 15604
// Dependencies: [15588]

// Module 15603
import _mod15588 from "module_15588" /* 15588 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15588((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
