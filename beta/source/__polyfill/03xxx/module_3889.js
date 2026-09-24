// Module ID: 3889
// Function ID: 3890
// Dependencies: [3890, 3891, 3892, 3893, 3894]

// Module 3889
import module_3890 from "module_3890" /* 3890 */;
import module_3891 from "module_3891" /* 3891 */;
import module_3892 from "module_3892" /* 3892 */;
import date_mod from "module_3893" /* 3893 */;
import date_mod from "module_3894" /* 3894 */;

if (!module_3890) {
  const obj = { default: module_3890 };
  let tmp3 = obj;
} else {
  tmp3 = module_3890;
}
if (!module_3891) {
  const obj2 = { default: module_3891 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3891;
}
if (!module_3892) {
  const obj3 = { default: module_3892 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3892;
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

export default { code: "cs", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
