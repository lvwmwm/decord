// Module ID: 4123
// Function ID: 4124
// Dependencies: [3849, 3850]
// Exports: default

// Module 4123
import _typeof_mod from "module_3849" /* 3849 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

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

export default function getMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getMilliseconds();
};
export default exports.default;
