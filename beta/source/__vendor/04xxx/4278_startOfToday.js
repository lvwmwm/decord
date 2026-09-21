// Module ID: 4278
// Function ID: 4279
// Name: startOfToday
// Dependencies: [4013]
// Exports: default

// Module 4278 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4013 */;

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
