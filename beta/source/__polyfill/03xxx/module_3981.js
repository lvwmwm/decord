// Module ID: 3981
// Function ID: 3982
// Dependencies: [3982, 3983, 3984, 3985, 3986]

// Module 3981
import module_3982 from "module_3982" /* 3982 */;
import module_3983 from "module_3983" /* 3983 */;
import dayAndTimeWithAdjective from "dayAndTimeWithAdjective" /* 3984 */;
import date_mod from "module_3985" /* 3985 */;
import date_mod from "module_3986" /* 3986 */;

if (!module_3982) {
  const obj = { default: module_3982 };
  let tmp3 = obj;
} else {
  tmp3 = module_3982;
}
if (!module_3983) {
  const obj2 = { default: module_3983 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3983;
}
if (!dayAndTimeWithAdjective) {
  const obj3 = { default: dayAndTimeWithAdjective };
  let tmp7 = obj3;
} else {
  tmp7 = dayAndTimeWithAdjective;
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

export default { code: "pl", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
