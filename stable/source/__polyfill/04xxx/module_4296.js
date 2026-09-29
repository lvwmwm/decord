// Module ID: 4296
// Function ID: 4297
// Dependencies: [3881, 3877, 4025, 4148, 3878]
// Exports: default

// Module 4296
import module_3881_mod from "module_3881" /* 3881 */;
import _typeof_mod from "module_3877" /* 3877 */;
import module_4025_mod from "module_4025" /* 4025 */;
import module_4148_mod from "module_4148" /* 4148 */;
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
let module_4025 = module_4025_mod;
if (!module_4025) {
  const obj3 = { default: module_4025 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4025;
}
module_4025 = tmp7;
let module_4148 = module_4148_mod;
if (!module_4148) {
  const obj4 = { default: module_4148 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4148;
}
module_4148 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_4025.default(defaultResult1, module_3881.default(arg1) - module_4148.default(defaultResult1));
};
export default exports.default;
