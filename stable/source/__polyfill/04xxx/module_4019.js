// Module ID: 4019
// Function ID: 4020
// Dependencies: [4020, 4021, 4022, 4321, 4322]

// Module 4019
import module_4020 from "module_4020" /* 4020 */;
import module_4021 from "module_4021" /* 4021 */;
import module_4022 from "module_4022" /* 4022 */;
import date_mod from "module_4321" /* 4321 */;
import date_mod from "module_4322" /* 4322 */;

if (!module_4020) {
  const obj = { default: module_4020 };
  let tmp3 = obj;
} else {
  tmp3 = module_4020;
}
if (!module_4021) {
  const obj2 = { default: module_4021 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4021;
}
if (!module_4022) {
  const obj3 = { default: module_4022 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4022;
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

export default { code: "uk", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
