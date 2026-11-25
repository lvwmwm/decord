// Module ID: 15606
// Function ID: 15607
// Dependencies: [15549, 15569]

// Module 15606
import _mod15569 from "module_15569" /* 15569 */;
import getOwnPropertyDescriptor_mod from "module_15549" /* 15549 */;

let getOwnPropertyDescriptor = getOwnPropertyDescriptor_mod;
if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = _mod15569(prototype, "name");
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
