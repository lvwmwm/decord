// Module ID: 4341
// Function ID: 4342
// Dependencies: [4342, 4344, 4345, 4343, 4346]

// Module 4341
import localeToNumber_mod from "localeToNumber" /* 4342 */;
import module_4344 from "module_4344" /* 4344 */;
import module_4345 from "module_4345" /* 4345 */;
import localeToNumber_mod from "module_4343" /* 4343 */;
import date from "module_4346" /* 4346 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4344) {
  const obj2 = { default: module_4344 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4344;
}
if (!module_4345) {
  const obj3 = { default: module_4345 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4345;
}
let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj4 = { default: localeToNumber };
  let tmp9 = obj4;
} else {
  tmp9 = localeToNumber;
}
if (!date) {
  const obj5 = { default: date };
  let tmp11 = obj5;
} else {
  tmp11 = date;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
export default exports.default;
