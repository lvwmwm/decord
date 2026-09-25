// Module ID: 4344
// Function ID: 4345
// Name: startOfToday
// Dependencies: [4079]
// Exports: default

// Module 4344 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4079 */;

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
