// Module ID: 14932
// Function ID: 14933
// Dependencies: [14917]

// Module 14932
import _mod14917 from "module_14917" /* 14917 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14917((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
