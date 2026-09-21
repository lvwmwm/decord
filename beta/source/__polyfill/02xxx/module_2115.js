// Module ID: 2115
// Function ID: 2116
// Dependencies: [2116, 2117, 2119, 2120, 2122]

// Module 2115
import module_2116 from "module_2116" /* 2116 */;
import module_2117 from "module_2117" /* 2117 */;
import module_2119 from "module_2119" /* 2119 */;
import date_mod from "module_2120" /* 2120 */;
import date_mod from "module_2122" /* 2122 */;

if (!module_2116) {
  const obj = { default: module_2116 };
  let tmp3 = obj;
} else {
  tmp3 = module_2116;
}
if (!module_2117) {
  const obj2 = { default: module_2117 };
  let tmp5 = obj2;
} else {
  tmp5 = module_2117;
}
if (!module_2119) {
  const obj3 = { default: module_2119 };
  let tmp7 = obj3;
} else {
  tmp7 = module_2119;
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

export default { code: "en-US", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
export default exports.default;
