// Module ID: 4951
// Function ID: 4952
// Name: startOfToday
// Dependencies: [4686]
// Exports: default

// Module 4951 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4686 */;

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
