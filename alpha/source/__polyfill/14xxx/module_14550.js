// Module ID: 14550
// Function ID: 14551
// Dependencies: [14535]

// Module 14550
import _mod14535 from "module_14535" /* 14535 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14535((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
