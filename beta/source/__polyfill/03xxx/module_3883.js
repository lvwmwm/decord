// Module ID: 3883
// Function ID: 3884
// Dependencies: [3884, 3885, 3886, 3887, 3888]

// Module 3883
import module_3884 from "module_3884" /* 3884 */;
import module_3885 from "module_3885" /* 3885 */;
import module_3886 from "module_3886" /* 3886 */;
import date_mod from "module_3887" /* 3887 */;
import date_mod from "module_3888" /* 3888 */;

if (!module_3884) {
  const obj = { default: module_3884 };
  let tmp3 = obj;
} else {
  tmp3 = module_3884;
}
if (!module_3885) {
  const obj2 = { default: module_3885 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3885;
}
if (!module_3886) {
  const obj3 = { default: module_3886 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3886;
}
let date = date_mod;
if (!date) {
  const obj4 = { default: date };
  let tmp9 = obj4;
} else {
  tmp9 = date;
}
let date = date_mod;
if (!date) {
  const obj5 = { default: date };
  let tmp11 = obj5;
} else {
  tmp11 = date;
}

export default { code: "es", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
