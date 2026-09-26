// Module ID: 4172
// Function ID: 4173
// Dependencies: [3877, 3878]
// Exports: default

// Module 4172
import _typeof_mod from "module_3877" /* 3877 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

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

export default function isBefore(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = defaultResult1.getTime();
  return time < _typeof.default(arg1).getTime();
};
export default exports.default;
