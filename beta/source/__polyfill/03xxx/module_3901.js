// Module ID: 3901
// Function ID: 3902
// Dependencies: [3902, 3903, 3904, 3905, 3906]

// Module 3901
import module_3902 from "module_3902" /* 3902 */;
import module_3903 from "module_3903" /* 3903 */;
import module_3904 from "module_3904" /* 3904 */;
import date_mod from "module_3905" /* 3905 */;
import date_mod from "module_3906" /* 3906 */;

if (!module_3902) {
  const obj = { default: module_3902 };
  let tmp3 = obj;
} else {
  tmp3 = module_3902;
}
if (!module_3903) {
  const obj2 = { default: module_3903 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3903;
}
if (!module_3904) {
  const obj3 = { default: module_3904 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3904;
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

export default { code: "hr", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
