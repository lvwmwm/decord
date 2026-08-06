// Module ID: 3359
// Function ID: 3360
// Name: code
// Dependencies: [3360, 3361, 3362, 3369, 3370]

// Module 3359 (code)
import formatDistance from "formatDistance";
import buildFormatLongFn from "buildFormatLongFn";
import formatRelative from "formatRelative";
import buildLocalizeFn from "buildLocalizeFn";
import module_3370 from "module_3370";

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
if (!module_3370) {
  const obj2 = { default: null };
  obj2[0] = module_3370;
  let tmp11 = obj2;
} else {
  tmp11 = module_3370;
}

export default { code: "bg", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
