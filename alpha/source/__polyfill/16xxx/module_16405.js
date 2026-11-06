// Module ID: 16405
// Function ID: 16406
// Dependencies: [16390]

// Module 16405
import _mod16390 from "module_16390" /* 16390 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16390((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
