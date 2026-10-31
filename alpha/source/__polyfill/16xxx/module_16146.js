// Module ID: 16146
// Function ID: 16147
// Dependencies: [16131]

// Module 16146
import _mod16131 from "module_16131" /* 16131 */;

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod16131((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
