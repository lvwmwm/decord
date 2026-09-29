// Module ID: 3873
// Function ID: 3874
// Dependencies: [3874, 3875, 3876, 3883, 3884]

// Module 3873
import module_3874 from "module_3874" /* 3874 */;
import module_3875 from "module_3875" /* 3875 */;
import module_3876 from "module_3876" /* 3876 */;
import date_mod from "module_3883" /* 3883 */;
import date_mod from "module_3884" /* 3884 */;

if (!module_3874) {
  const obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
if (!module_3875) {
  const obj2 = { default: module_3875 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3875;
}
if (!module_3876) {
  const obj3 = { default: module_3876 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3876;
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

export default { code: "bg", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
