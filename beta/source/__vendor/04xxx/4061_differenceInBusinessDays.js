// Module ID: 4061
// Function ID: 4062
// Name: differenceInBusinessDays
// Dependencies: [4029, 4043, 4062, 4063, 4032, 3881, 3882, 3885]
// Exports: default

// Module 4061 (differenceInBusinessDays)
import module_4029_mod from "module_4029" /* 4029 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4043 */;
import module_4062_mod from "module_4062" /* 4062 */;
import module_4063_mod from "module_4063" /* 4063 */;
import module_4032_mod from "module_4032" /* 4032 */;
import _typeof_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;
import module_3885_mod from "module_3885" /* 3885 */;

let module_4029 = module_4029_mod;
if (!module_4029) {
  const obj = { default: module_4029 };
  let tmp3 = obj;
} else {
  tmp3 = module_4029;
}
module_4029 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_4062 = module_4062_mod;
if (!module_4062) {
  const obj3 = { default: module_4062 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4062;
}
module_4062 = tmp7;
let module_4063 = module_4063_mod;
if (!module_4063) {
  const obj4 = { default: module_4063 };
  let tmp9 = obj4;
} else {
  tmp9 = module_4063;
}
module_4063 = tmp9;
let module_4032 = module_4032_mod;
if (!module_4032) {
  const obj5 = { default: module_4032 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4032;
}
module_4032 = tmp11;
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
let module_3885 = module_3885_mod;
if (!module_3885) {
  const obj8 = { default: module_3885 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3885;
}
module_3885 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_4063.default(defaultResult1)) {
    if (module_4063.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3885.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_4029.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_4062.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_4032.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_4029.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_4062.default(defaultResult1, defaultResult6));
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
