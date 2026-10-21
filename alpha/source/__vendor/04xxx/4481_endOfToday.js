// Module ID: 4481
// Function ID: 4482
// Name: endOfToday
// Dependencies: [4452]
// Exports: default

// Module 4481 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4452 */;

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
