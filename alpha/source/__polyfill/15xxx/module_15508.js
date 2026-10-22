// Module ID: 15508
// Function ID: 15509
// Dependencies: [15493]

// Module 15508
import _mod15493 from "module_15493" /* 15493 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15493((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
