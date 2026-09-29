// Module ID: 4297
// Function ID: 4298
// Dependencies: [3881, 3877, 4149, 3878]
// Exports: default

// Module 4297
import module_3881_mod from "module_3881" /* 3881 */;
import _typeof_mod from "module_3877" /* 3877 */;
import module_4149_mod from "module_4149" /* 4149 */;
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
let module_4149 = module_4149_mod;
if (!module_4149) {
  const obj3 = { default: module_4149 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4149;
}
module_4149 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4149.default(defaultResult1) - module_3881.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
