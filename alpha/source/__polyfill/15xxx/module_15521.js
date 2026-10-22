// Module ID: 15521
// Function ID: 15522
// Dependencies: [15506]

// Module 15521
import _mod15506 from "module_15506" /* 15506 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15506((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
