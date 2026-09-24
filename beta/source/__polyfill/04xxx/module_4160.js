// Module ID: 4160
// Function ID: 4161
// Dependencies: [3881, 3882]
// Exports: default

// Module 4160
import _typeof_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

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

export default function getTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getTime();
};
export default exports.default;
