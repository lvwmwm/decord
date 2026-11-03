// Module ID: 16331
// Function ID: 16332
// Dependencies: [16274, 16294]

// Module 16331
import _mod16294 from "module_16294" /* 16294 */;
import getOwnPropertyDescriptor_mod from "module_16274" /* 16274 */;

let getOwnPropertyDescriptor = getOwnPropertyDescriptor_mod;
if (getOwnPropertyDescriptor) {
  const _Object = Object;
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
}
const tmp = _mod16294(prototype, "name");
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
