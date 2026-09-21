// Module ID: 4029
// Function ID: 4030
// Name: differenceInBusinessDays
// Dependencies: [3997, 4011, 4030, 4031, 4000, 3849, 3850, 3853]
// Exports: default

// Module 4029 (differenceInBusinessDays)
import module_3997_mod from "module_3997" /* 3997 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4011 */;
import module_4030_mod from "module_4030" /* 4030 */;
import module_4031_mod from "module_4031" /* 4031 */;
import module_4000_mod from "module_4000" /* 4000 */;
import _typeof_mod from "module_3849" /* 3849 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;
import module_3853_mod from "module_3853" /* 3853 */;

let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj = { default: module_3997 };
  let tmp3 = obj;
} else {
  tmp3 = module_3997;
}
module_3997 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4030 = module_4030_mod;
if (!module_4030) {
  const obj3 = { default: module_4030 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4030;
}
module_4030 = tmp7;
let module_4031 = module_4031_mod;
if (!module_4031) {
  const obj4 = { default: module_4031 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4031;
}
module_4031 = tmp9;
let module_4000 = module_4000_mod;
if (!module_4000) {
  const obj5 = { default: module_4000 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4000;
}
module_4000 = tmp11;
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
let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj8 = { default: module_3853 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3853;
}
module_3853 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4031.default(defaultResult1)) {
    if (module_4031.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3853.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3997.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4030.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4000.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3997.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4030.default(defaultResult1, defaultResult6));
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
