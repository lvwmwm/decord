// Module ID: 4622
// Function ID: 4623
// Dependencies: [4623, 4625, 4626, 4624, 4627]

// Module 4622
import formatDistance from "formatDistance" /* 4623 */;
import buildFormatLongFn from "buildFormatLongFn" /* 4625 */;
import formatRelative from "formatRelative" /* 4626 */;
import localeToNumber from "localeToNumber" /* 4624 */;
import date from "module_4627" /* 4627 */;

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
if (!localeToNumber) {
  tmp9 = { default: localeToNumber };
  const obj4 = { default: localeToNumber };
} else {
  tmp9 = localeToNumber;
}
if (!date) {
  tmp11 = { default: date };
  const obj5 = { default: date };
} else {
  tmp11 = date;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
