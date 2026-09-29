// Module ID: 4306
// Function ID: 4307
// Name: startOfToday
// Dependencies: [4041]
// Exports: default

// Module 4306 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4041 */;

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
