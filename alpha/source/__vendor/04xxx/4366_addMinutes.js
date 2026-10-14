// Module ID: 4366
// Function ID: 4367
// Name: addMinutes
// Dependencies: [4205, 4356, 4202]
// Exports: default

// Module 4366 (addMinutes)
import toInteger_mod from "toInteger" /* 4205 */;
import addMilliseconds_mod from "addMilliseconds" /* 4356 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let tmp3;
let tmp5;
let tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let addMilliseconds = addMilliseconds_mod;
if (!addMilliseconds) {
  tmp5 = { default: addMilliseconds };
  const obj2 = { default: addMilliseconds };
} else {
  tmp5 = addMilliseconds;
}
addMilliseconds = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(interval, toInteger.default(arg1) * c3);
};
