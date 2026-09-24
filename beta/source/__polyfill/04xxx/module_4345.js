// Module ID: 4345
// Function ID: 4346
// Dependencies: [4346, 4348, 4349, 4347, 4350]

// Module 4345
import localeToNumber_mod from "localeToNumber" /* 4346 */;
import module_4348 from "module_4348" /* 4348 */;
import module_4349 from "module_4349" /* 4349 */;
import localeToNumber_mod from "module_4347" /* 4347 */;
import date from "module_4350" /* 4350 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4348) {
  const obj2 = { default: module_4348 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4348;
}
if (!module_4349) {
  const obj3 = { default: module_4349 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4349;
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
