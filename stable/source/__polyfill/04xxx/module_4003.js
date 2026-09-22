// Module ID: 4003
// Function ID: 4004
// Dependencies: [3725, 3726]
// Exports: default

// Module 4003
import _typeof_mod from "module_3725" /* 3725 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

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

export default function getSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getSeconds();
};
export default exports.default;
