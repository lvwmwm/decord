// Module ID: 4313
// Function ID: 4314
// Dependencies: [4314, 4316, 4317, 4315, 4318]

// Module 4313
import localeToNumber_mod from "localeToNumber" /* 4314 */;
import module_4316 from "module_4316" /* 4316 */;
import module_4317 from "module_4317" /* 4317 */;
import localeToNumber_mod from "module_4315" /* 4315 */;
import date from "module_4318" /* 4318 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4316) {
  const obj2 = { default: module_4316 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4316;
}
if (!module_4317) {
  const obj3 = { default: module_4317 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4317;
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
