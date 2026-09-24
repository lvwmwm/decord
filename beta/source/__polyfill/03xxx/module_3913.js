// Module ID: 3913
// Function ID: 3914
// Dependencies: [2116, 2119, 2120, 2122, 3914]

// Module 3913
import module_2116 from "module_2116" /* 2116 */;
import module_2119 from "module_2119" /* 2119 */;
import date_mod from "module_2120" /* 2120 */;
import date_mod from "module_2122" /* 2122 */;
import module_3914 from "module_3914" /* 3914 */;

if (!module_2116) {
  const obj = { default: module_2116 };
  let tmp3 = obj;
} else {
  tmp3 = module_2116;
}
if (!module_2119) {
  const obj2 = { default: module_2119 };
  let tmp5 = obj2;
} else {
  tmp5 = module_2119;
}
let date = date_mod;
if (!date) {
  const obj3 = { default: date };
  let tmp7 = obj3;
} else {
  tmp7 = date;
}
let date = date_mod;
if (!date) {
  const obj4 = { default: date };
  let tmp9 = obj4;
} else {
  tmp9 = date;
}
if (!module_3914) {
  const obj5 = { default: module_3914 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3914;
}

export default { code: "en-GB", formatDistance: tmp3.default, formatLong: tmp11.default, formatRelative: tmp5.default, localize: tmp7.default, match: tmp9.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
