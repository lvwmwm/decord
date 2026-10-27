// Module ID: 4484
// Function ID: 4485
// Name: endOfToday
// Dependencies: [4455]
// Exports: default

// Module 4484 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4455 */;

let tmp3;
let endOfDay = endOfDay_mod;
if (!endOfDay) {
  tmp3 = { default: endOfDay };
  const obj = { default: endOfDay };
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
