// Module ID: 15754
// Function ID: 15755
// Dependencies: [15739]

// Module 15754
import _mod15739 from "module_15739" /* 15739 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod15739((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
