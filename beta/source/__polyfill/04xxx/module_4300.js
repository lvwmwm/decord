// Module ID: 4300
// Function ID: 4301
// Dependencies: [3885, 3881, 4029, 4152, 3882]
// Exports: default

// Module 4300
import module_3885_mod from "module_3885" /* 3885 */;
import _typeof_mod from "module_3881" /* 3881 */;
import module_4029_mod from "module_4029" /* 4029 */;
import module_4152_mod from "module_4152" /* 4152 */;
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
let module_4029 = module_4029_mod;
if (!module_4029) {
  const obj3 = { default: module_4029 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4029;
}
module_4029 = tmp7;
let module_4152 = module_4152_mod;
if (!module_4152) {
  const obj4 = { default: module_4152 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4152;
}
module_4152 = tmp9;
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
  return module_4029.default(defaultResult1, module_3885.default(arg1) - module_4152.default(defaultResult1));
};
export default exports.default;
