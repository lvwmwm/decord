// Module ID: 4145
// Function ID: 4146
// Dependencies: [3881, 4100, 4043, 3882]
// Exports: default

// Module 4145
import _typeof_mod from "module_3881" /* 3881 */;
import startOfYear_mod from "startOfYear" /* 4100 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4043 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let startOfYear = startOfYear_mod;
if (!startOfYear) {
  const obj2 = { default: startOfYear };
  let tmp5 = obj2;
} else {
  tmp5 = startOfYear;
}
startOfYear = tmp5;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj3 = { default: differenceInCalendarDays };
  let tmp7 = obj3;
} else {
  tmp7 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function getDayOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return differenceInCalendarDays.default(defaultResult1, startOfYear.default(defaultResult1)) + 1;
};
export default exports.default;
