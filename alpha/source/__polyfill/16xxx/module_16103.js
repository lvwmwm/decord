// Module ID: 16103
// Function ID: 16104
// Dependencies: [16046, 16066]

// Module 16103
import _mod16066 from "module_16066" /* 16066 */;
import getOwnPropertyDescriptor_mod from "module_16046" /* 16046 */;

let getOwnPropertyDescriptor = getOwnPropertyDescriptor_mod;
if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = _mod16066(prototype, "name");
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
