// Module ID: 4711
// Function ID: 4712
// Name: setWeek
// Dependencies: [4567, 4286, 4287, 4290]
// Exports: default

// Module 4711 (setWeek)
import getWeek_mod from "getWeek" /* 4567 */;
import toDate_mod from "toDate" /* 4286 */;
import requiredArgs_mod from "requiredArgs" /* 4287 */;
import toInteger_mod from "toInteger" /* 4290 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let getWeek = getWeek_mod;
if (!getWeek) {
  tmp3 = { default: getWeek };
  const obj = { default: getWeek };
} else {
  tmp3 = getWeek;
}
getWeek = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp9 = { default: toInteger };
  const obj4 = { default: toInteger };
} else {
  tmp9 = toInteger;
}
toInteger = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const diff = getWeek.default(defaultResult1, arg2) - defaultResult2;
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
