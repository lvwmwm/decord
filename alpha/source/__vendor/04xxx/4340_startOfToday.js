// Module ID: 4340
// Function ID: 4341
// Name: startOfToday
// Dependencies: [4075]
// Exports: default

// Module 4340 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4075 */;

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
