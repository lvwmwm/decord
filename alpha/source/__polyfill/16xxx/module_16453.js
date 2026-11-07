// Module ID: 16453
// Function ID: 16454
// Dependencies: [16438]

// Module 16453
import _mod16438 from "module_16438" /* 16438 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16438((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
