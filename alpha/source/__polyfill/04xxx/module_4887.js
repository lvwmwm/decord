// Module ID: 4887
// Function ID: 4888
// Dependencies: [4888, 4890, 4891, 4889, 4892]

// Module 4887
import formatDistance from "formatDistance" /* 4888 */;
import buildFormatLongFn from "buildFormatLongFn" /* 4890 */;
import formatRelative from "formatRelative" /* 4891 */;
import localeToNumber from "localeToNumber" /* 4889 */;
import date from "module_4892" /* 4892 */;

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
