// Module ID: 3907
// Function ID: 3908
// Dependencies: [3908, 3909, 3910, 3911, 3912]

// Module 3907
import module_3908 from "module_3908" /* 3908 */;
import module_3909 from "module_3909" /* 3909 */;
import module_3910 from "module_3910" /* 3910 */;
import date_mod from "module_3911" /* 3911 */;
import date_mod from "module_3912" /* 3912 */;

if (!module_3908) {
  const obj = { default: module_3908 };
  let tmp3 = obj;
} else {
  tmp3 = module_3908;
}
if (!module_3909) {
  const obj2 = { default: module_3909 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3909;
}
if (!module_3910) {
  const obj3 = { default: module_3910 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3910;
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

export default { code: "el", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
