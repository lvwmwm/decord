// Module ID: 16446
// Function ID: 16447
// Dependencies: [16389, 16409]

// Module 16446
import _mod16409 from "module_16409" /* 16409 */;
import getOwnPropertyDescriptor_mod from "module_16389" /* 16389 */;

let getOwnPropertyDescriptor = getOwnPropertyDescriptor_mod;
if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = _mod16409(prototype, "name");
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
