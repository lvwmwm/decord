// Module ID: 3921
// Function ID: 3922
// Dependencies: [3922, 3923, 3924, 3925, 3926]

// Module 3921
import futureSeconds from "futureSeconds" /* 3922 */;
import module_3923 from "module_3923" /* 3923 */;
import module_3924 from "module_3924" /* 3924 */;
import date_mod from "module_3925" /* 3925 */;
import date_mod from "module_3926" /* 3926 */;

if (!futureSeconds) {
  const obj = { default: futureSeconds };
  let tmp3 = obj;
} else {
  tmp3 = futureSeconds;
}
if (!module_3923) {
  const obj2 = { default: module_3923 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3923;
}
if (!module_3924) {
  const obj3 = { default: module_3924 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3924;
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

export default { code: "fi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
