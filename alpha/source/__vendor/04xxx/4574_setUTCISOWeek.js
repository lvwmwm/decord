// Module ID: 4574
// Function ID: 4575
// Name: setUTCISOWeek
// Dependencies: [4258, 4254, 4490, 4255]
// Exports: default

// Module 4574 (setUTCISOWeek)
import toInteger_mod from "toInteger" /* 4258 */;
import toDate_mod from "toDate" /* 4254 */;
import getUTCISOWeek_mod from "getUTCISOWeek" /* 4490 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

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
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let getUTCISOWeek = getUTCISOWeek_mod;
if (!getUTCISOWeek) {
  tmp7 = { default: getUTCISOWeek };
  const obj3 = { default: getUTCISOWeek };
} else {
  tmp7 = getUTCISOWeek;
}
getUTCISOWeek = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const diff = getUTCISOWeek.default(defaultResult1) - defaultResult2;
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
