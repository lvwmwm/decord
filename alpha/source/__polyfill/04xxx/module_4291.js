// Module ID: 4291
// Function ID: 4292
// Dependencies: [3947, 3948]
// Exports: default

// Module 4291
import _typeof_mod from "module_3947" /* 3947 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isPast(arg0) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(arg0).getTime();
  return time < Date.now();
};
export default exports.default;
