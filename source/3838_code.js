// Module ID: 3838
// Function ID: 3839
// Name: code
// Dependencies: [3839, 3840, 3841, 3842, 3843]

// Module 3838 (code)
import formatDistance from "formatDistance";
import buildFormatLongFn from "buildFormatLongFn";
import formatRelative from "formatRelative";
import buildLocalizeFn from "buildLocalizeFn";
import module_3843 from "module_3843";

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
}
if (!buildFormatLongFn) {
  obj = { default: null };
  obj[0] = buildFormatLongFn;
  let tmp5 = obj;
} else {
  tmp5 = buildFormatLongFn;
}
if (!formatRelative) {
  obj = { default: null };
  obj[0] = formatRelative;
  let tmp7 = obj;
} else {
  tmp7 = formatRelative;
}
if (!buildLocalizeFn) {
  const obj1 = { default: null };
  obj1[0] = buildLocalizeFn;
  let tmp9 = obj1;
} else {
  tmp9 = buildLocalizeFn;
}
if (!module_3843) {
  const obj2 = { default: null };
  obj2[0] = module_3843;
  let tmp11 = obj2;
} else {
  tmp11 = module_3843;
}

export default { code: "zh-TW", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
