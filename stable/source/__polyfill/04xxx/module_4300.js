// Module ID: 4300
// Function ID: 4301
// Dependencies: [3881, 3877, 4290, 3878]
// Exports: default

// Module 4300
import module_3881_mod from "module_3881" /* 3881 */;
import _typeof_mod from "module_3877" /* 3877 */;
import module_4290_mod from "module_4290" /* 4290 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj = { default: module_3881 };
  let tmp3 = obj;
} else {
  tmp3 = module_3881;
}
module_3881 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4290 = module_4290_mod;
if (!module_4290) {
  const obj3 = { default: module_4290 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4290;
}
module_4290 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3881.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4290.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;
