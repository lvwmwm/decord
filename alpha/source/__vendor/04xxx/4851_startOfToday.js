// Module ID: 4851
// Function ID: 4852
// Name: startOfToday
// Dependencies: [4586]
// Exports: default

// Module 4851 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4586 */;

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
