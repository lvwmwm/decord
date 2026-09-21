// Module ID: 4150
// Function ID: 4151
// Dependencies: [4151, 4031, 3850]
// Exports: default

// Module 4150
import _typeof_mod from "module_4151" /* 4151 */;
import module_4031_mod from "module_4031" /* 4031 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_4031 = module_4031_mod;
if (!module_4031) {
  const obj2 = { default: module_4031 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4031;
}
module_4031 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isMatch(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  return module_4031.default(_typeof.default(arg0, arg1, new Date(), arg2));
};
export default exports.default;
