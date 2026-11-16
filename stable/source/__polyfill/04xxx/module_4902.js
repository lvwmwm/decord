// Module ID: 4902
// Function ID: 4903
// Dependencies: [4903, 4904, 4905, 4906, 4907]

// Module 4902
import formatDistance from "formatDistance" /* 4903 */;
import buildFormatLongFn from "buildFormatLongFn" /* 4904 */;
import formatRelative from "formatRelative" /* 4905 */;
import date_mod from "module_4906" /* 4906 */;
import date_mod2 from "module_4907" /* 4907 */;

let tmp11;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
if (!formatDistance) {
  tmp3 = { default: formatDistance };
  const obj = { default: formatDistance };
} else {
  tmp3 = formatDistance;
}
if (!buildFormatLongFn) {
  tmp5 = { default: buildFormatLongFn };
  const obj2 = { default: buildFormatLongFn };
} else {
  tmp5 = buildFormatLongFn;
}
if (!formatRelative) {
  tmp7 = { default: formatRelative };
  const obj3 = { default: formatRelative };
} else {
  tmp7 = formatRelative;
}
let date = date_mod2;
if (!date) {
  tmp9 = { default: date };
  const obj4 = { default: date };
} else {
  tmp9 = date;
}
date = date_mod2;
if (!date) {
  tmp11 = { default: date };
  const obj5 = { default: date };
} else {
  tmp11 = date;
}

export default { code: "zh-CN", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
