// Module ID: 15867
// Function ID: 15868
// Dependencies: [15810, 15830]

// Module 15867
import _mod15830 from "module_15830" /* 15830 */;
import getOwnPropertyDescriptor_mod from "module_15810" /* 15810 */;

let getOwnPropertyDescriptor = getOwnPropertyDescriptor_mod;
if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = _mod15830(prototype, "name");
let tmp3 = tmp;
const tmp2 = tmp && "something" === (function something() {

}).name;
if (tmp3) {
  const _module = getOwnPropertyDescriptor;
  let tmp5 = !_module;
  if (_module) {
    tmp5 = getOwnPropertyDescriptor && getOwnPropertyDescriptor(prototype, "name").configurable;
    getOwnPropertyDescriptor && getOwnPropertyDescriptor(prototype, "name").configurable;
  }
  tmp3 = tmp5;
}

export default { EXISTS: tmp, PROPER: tmp2, CONFIGURABLE: tmp3 };
