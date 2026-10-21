// Module ID: 4434
// Function ID: 4435
// Name: isValid
// Dependencies: [4435, 4252, 4253]
// Exports: default

// Module 4434 (isValid)
import isDate_mod from "isDate" /* 4435 */;
import toDate_mod from "toDate" /* 4252 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let tmp3;
let tmp5;
let tmp7;
let isDate = isDate_mod;
if (!isDate) {
  tmp3 = { default: isDate };
  const obj = { default: isDate };
} else {
  tmp3 = isDate;
}
isDate = tmp3;
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

export default function isValid(num) {
  requiredArgs.default(1, arguments);
  if (!isDate.default(num)) {
    if (typeof num !== "number") {
      return false;
    }
  }
  return !isNaN(Number(toDate.default(num)));
};
