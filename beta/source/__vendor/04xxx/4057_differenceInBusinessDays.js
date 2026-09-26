// Module ID: 4057
// Function ID: 4058
// Name: differenceInBusinessDays
// Dependencies: [4025, 4039, 4058, 4059, 4028, 3877, 3878, 3881]
// Exports: default

// Module 4057 (differenceInBusinessDays)
import module_4025_mod from "module_4025" /* 4025 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4039 */;
import module_4058_mod from "module_4058" /* 4058 */;
import module_4059_mod from "module_4059" /* 4059 */;
import module_4028_mod from "module_4028" /* 4028 */;
import _typeof_mod from "module_3877" /* 3877 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import module_3881_mod from "module_3881" /* 3881 */;

let module_4025 = module_4025_mod;
if (!module_4025) {
  const obj = { default: module_4025 };
  let tmp3 = obj;
} else {
  tmp3 = module_4025;
}
module_4025 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4058 = module_4058_mod;
if (!module_4058) {
  const obj3 = { default: module_4058 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4058;
}
module_4058 = tmp7;
let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj4 = { default: module_4059 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4059;
}
module_4059 = tmp9;
let module_4028 = module_4028_mod;
if (!module_4028) {
  const obj5 = { default: module_4028 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4028;
}
module_4028 = tmp11;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj6 = { default: _typeof };
  let tmp13 = obj6;
} else {
  tmp13 = _typeof;
}
_typeof = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj7 = { default: requiredArgs };
  let tmp15 = obj7;
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj8 = { default: module_3881 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3881;
}
module_3881 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4059.default(defaultResult1)) {
    if (module_4059.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3881.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4025.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4058.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4028.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4025.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4058.default(defaultResult1, defaultResult6));
      }
      let num6 = 0;
      if (0 !== tmp13) {
        num6 = tmp13;
      }
      return num6;
    }
  }
  return NaN;
};
export default exports.default;
