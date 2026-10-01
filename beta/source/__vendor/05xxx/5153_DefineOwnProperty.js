// Module ID: 5153
// Function ID: 5154
// Name: DefineOwnProperty
// Dependencies: [1458, 5138, 1315, 1305]

// Module 5153 (DefineOwnProperty)
import flag from "flag" /* 1305 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import GetIntrinsic from "GetIntrinsic" /* 5138 */;
import hasPropertyDescriptors_mod from "hasPropertyDescriptors" /* 1458 */;

let hasPropertyDescriptors = hasPropertyDescriptors_mod;
hasPropertyDescriptors = hasPropertyDescriptors.hasArrayLengthDefineBug();
let closure_3 = hasPropertyDescriptors && GetIntrinsic;
const tmp2 = hasPropertyDescriptors && GetIntrinsic;
let closure_4 = callBoundIntrinsic("Object.prototype.propertyIsEnumerable");

export default function DefineOwnProperty(fn, fn2, fn3, arg3, arg4, __Value__) {
  if (flag) {
    const tmp7 = hasPropertyDescriptors;
    if (tmp7) {
      if ("length" === arg4) {
        if ("[[Value]]" in __Value__) {
          if (closure_3(arg3)) {
            let flag4;
            if (arg3.length !== __Value__["[[Value]]"]) {
              arg3.length = __Value__["[[Value]]"];
              flag4 = arg3.length === __Value__["[[Value]]"];
            }
            return flag4;
          }
        }
      }
    }
    const tmpResult = flag;
    tmpResult(arg3, arg4, fn3(__Value__));
    flag4 = true;
  } else if (fn(__Value__)) {
    if (__Value__["[[Configurable]]"]) {
      if (__Value__["[[Writable]]"]) {
        if (arg4 in arg3) {
          if (closure_4(arg3, arg4) !== __Value__["[[Enumerable]]"]) {
            return false;
          }
        }
        const prop = __Value__["[[Value]]"];
        arg3[arg4] = prop;
        return fn2(arg3[arg4], prop);
      }
    }
    return false;
  } else {
    return false;
  }
};
