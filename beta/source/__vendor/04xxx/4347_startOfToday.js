// Module ID: 4347
// Function ID: 4348
// Name: startOfToday
// Dependencies: [4082]
// Exports: default

// Module 4347 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4082 */;

let tmp3;
let startOfDay = startOfDay_mod;
if (!startOfDay) {
  tmp3 = { default: startOfDay };
  const obj = { default: startOfDay };
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
