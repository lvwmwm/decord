// Module ID: 4880
// Function ID: 4881
// Name: isBefore
// Dependencies: [4585, 4586]
// Exports: default

// Module 4880 (isBefore)
import toDate_mod from "toDate" /* 4585 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

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

export default function isBefore(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const time = defaultResult1.getTime();
  return time < defaultResult2.getTime();
};
