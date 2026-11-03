// Module ID: 4850
// Function ID: 4851
// Name: startOfToday
// Dependencies: [4585]
// Exports: default

// Module 4850 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4585 */;

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
