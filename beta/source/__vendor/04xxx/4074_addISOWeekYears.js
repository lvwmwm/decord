// Module ID: 4074
// Function ID: 4075
// Name: addISOWeekYears
// Dependencies: [3922, 4075, 4078, 3919]
// Exports: default

// Module 4074 (addISOWeekYears)
import toInteger_mod from "toInteger" /* 3922 */;
import getISOWeekYear_mod from "getISOWeekYear" /* 4075 */;
import setISOWeekYear_mod from "setISOWeekYear" /* 4078 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let getISOWeekYear = getISOWeekYear_mod;
if (!getISOWeekYear) {
  tmp5 = { default: getISOWeekYear };
  const obj2 = { default: getISOWeekYear };
} else {
  tmp5 = getISOWeekYear;
}
getISOWeekYear = tmp5;
let setISOWeekYear = setISOWeekYear_mod;
if (!setISOWeekYear) {
  tmp7 = { default: setISOWeekYear };
  const obj3 = { default: setISOWeekYear };
} else {
  tmp7 = setISOWeekYear;
}
setISOWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toInteger.default(arg1);
  return setISOWeekYear.default(arg0, getISOWeekYear.default(arg0) + defaultResult1);
};
