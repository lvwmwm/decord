// Module ID: 4310
// Function ID: 4311
// Name: startOfToday
// Dependencies: [4045]
// Exports: default

// Module 4310 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4045 */;

let startOfDay = startOfDay_mod;
if (!startOfDay) {
  const obj = { default: startOfDay };
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
export default exports.default;
