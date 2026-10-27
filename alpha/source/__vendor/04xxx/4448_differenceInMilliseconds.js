// Module ID: 4448
// Function ID: 4449
// Name: differenceInMilliseconds
// Dependencies: [4255, 4256]
// Exports: default

// Module 4448 (differenceInMilliseconds)
import toDate_mod from "toDate" /* 4255 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const time = defaultResult1.getTime();
  const defaultResult2 = toDate.default(arg1);
  return time - defaultResult2.getTime();
};
