// Module ID: 4772
// Function ID: 4773
// Name: isSameMonth
// Dependencies: [4421, 4422]
// Exports: default

// Module 4772 (isSameMonth)
import toDate_mod from "toDate" /* 4421 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

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

export default function isSameMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  let tmp3 = fullYear === defaultResult2.getFullYear();
  if (tmp3) {
    const month = defaultResult1.getMonth();
    tmp3 = month === defaultResult2.getMonth();
  }
  return tmp3;
};
