// Module ID: 3917
// Function ID: 3918
// Dependencies: [3918, 3919, 3920, 3921, 3922]

// Module 3917
import futureSeconds from "futureSeconds" /* 3918 */;
import module_3919 from "module_3919" /* 3919 */;
import module_3920 from "module_3920" /* 3920 */;
import date_mod from "module_3921" /* 3921 */;
import date_mod from "module_3922" /* 3922 */;

if (!futureSeconds) {
  const obj = { default: futureSeconds };
  let tmp3 = obj;
} else {
  tmp3 = futureSeconds;
}
if (!module_3919) {
  const obj2 = { default: module_3919 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3919;
}
if (!module_3920) {
  const obj3 = { default: module_3920 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3920;
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
