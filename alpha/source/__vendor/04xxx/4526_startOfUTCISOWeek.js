// Module ID: 4526
// Function ID: 4527
// Name: startOfUTCISOWeek
// Dependencies: [4289, 4290]
// Exports: default

// Module 4526 (startOfUTCISOWeek)
import toDate_mod from "toDate" /* 4289 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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

export default function startOfUTCISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const uTCDay = defaultResult1.getUTCDay();
  let num = 0;
  if (uTCDay < 1) {
    num = 7;
  }
  const sum = num + uTCDay;
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - (sum - 1));
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return defaultResult1;
};
