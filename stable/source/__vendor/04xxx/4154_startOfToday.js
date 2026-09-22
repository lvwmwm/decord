// Module ID: 4154
// Function ID: 4155
// Name: startOfToday
// Dependencies: [3889]
// Exports: default

// Module 4154 (startOfToday)
import startOfDay_mod from "startOfDay" /* 3889 */;

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
