// Module ID: 15273
// Function ID: 15274
// Dependencies: [15258]

// Module 15273
import _mod15258 from "module_15258" /* 15258 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15258((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
