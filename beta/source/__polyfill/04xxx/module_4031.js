// Module ID: 4031
// Function ID: 4032
// Dependencies: [4032, 3881, 3885, 3882, 4033, 4034]
// Exports: default

// Module 4031
import module_4032_mod from "module_4032" /* 4032 */;
import _typeof_mod from "module_3881" /* 3881 */;
import module_3885_mod from "module_3885" /* 3885 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;
import module_4033_mod from "module_4033" /* 4033 */;
import module_4034_mod from "module_4034" /* 4034 */;

let module_4032 = module_4032_mod;
if (!module_4032) {
  const obj = { default: module_4032 };
  let tmp3 = obj;
} else {
  tmp3 = module_4032;
}
module_4032 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3885 = module_3885_mod;
if (!module_3885) {
  let obj3 = { default: module_3885 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3885;
}
module_3885 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_4033 = module_4033_mod;
if (!module_4033) {
  const obj5 = { default: module_4033 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4033;
}
module_4033 = tmp11;
let module_4034 = module_4034_mod;
if (!module_4034) {
  const obj6 = { default: module_4034 };
  let tmp13 = obj6;
} else {
  tmp13 = module_4034;
}
module_4034 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_4032;
  let defaultResult2 = module_4032.default(defaultResult1);
  const defaultResult3 = module_3885.default(arg1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    defaultResult1.setDate(defaultResult1.getDate() + 7 * obj3.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        let tmp9 = module_4032;
        diff = absolute;
        if (!module_4032.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = tmp9;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_4034.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_4033.default(defaultResult1)) {
        let num7 = -2;
        if (num3 < 0) {
          num7 = 1;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num7);
        const date2 = defaultResult1.getDate();
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
  obj3 = module_3885;
};
export default exports.default;
