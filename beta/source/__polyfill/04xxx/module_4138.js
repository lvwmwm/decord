// Module ID: 4138
// Function ID: 4139
// Dependencies: [3877, 3881, 3878]
// Exports: default

// Module 4138
import _typeof_mod from "module_3877" /* 3877 */;
import module_3881_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj2 = { default: module_3881 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3881;
}
module_3881 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3881.default(arg0));
};
export default exports.default;
