// Module ID: 4120
// Function ID: 4121
// Dependencies: [3849, 3850]
// Exports: default

// Module 4120
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

export default function getISODay(arg0) {
  requiredArgs.default(1, arguments);
  let num = _typeof.default(arg0).getDay();
  if (0 === num) {
    num = 7;
  }
  return num;
};
export default exports.default;
