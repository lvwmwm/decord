// Module ID: 4849
// Function ID: 4850
// Name: startOfToday
// Dependencies: [4584]
// Exports: default

// Module 4849 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4584 */;

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
