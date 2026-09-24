// Module ID: 4201
// Function ID: 4202
// Dependencies: [3885, 3881, 4117, 3882]
// Exports: default

// Module 4201
import module_3885_mod from "module_3885" /* 3885 */;
import _typeof_mod from "module_3881" /* 3881 */;
import module_4117_mod from "module_4117" /* 4117 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj = { default: module_3885 };
  let tmp3 = obj;
} else {
  tmp3 = module_3885;
}
module_3885 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_4117 = module_4117_mod;
if (!module_4117) {
  const obj3 = { default: module_4117 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4117;
}
module_4117 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_4117.default(defaultResult1) - module_3885.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
