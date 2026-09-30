// Module ID: 4377
// Function ID: 4378
// Name: startOfToday
// Dependencies: [4112]
// Exports: default

// Module 4377 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4112 */;

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
