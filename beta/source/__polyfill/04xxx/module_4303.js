// Module ID: 4303
// Function ID: 4304
// Dependencies: [3885, 3881, 3882]
// Exports: default

// Module 4303
import module_3885_mod from "module_3885" /* 3885 */;
import _typeof_mod from "module_3881" /* 3881 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setMinutes(module_3885, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3885);
  defaultResult1.setMinutes(module_3885.default(arg1));
  return defaultResult1;
};
export default exports.default;
