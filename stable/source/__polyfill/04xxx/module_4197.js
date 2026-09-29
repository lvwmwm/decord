// Module ID: 4197
// Function ID: 4198
// Dependencies: [3881, 3877, 4113, 3878]
// Exports: default

// Module 4197
import module_3881_mod from "module_3881" /* 3881 */;
import _typeof_mod from "module_3877" /* 3877 */;
import module_4113_mod from "module_4113" /* 4113 */;
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
let module_4113 = module_4113_mod;
if (!module_4113) {
  const obj3 = { default: module_4113 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4113;
}
module_4113 = tmp7;
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
  const diff = module_4113.default(defaultResult1) - module_3881.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
