// Module ID: 4428
// Function ID: 4429
// Name: endOfToday
// Dependencies: [4399]
// Exports: default

// Module 4428 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4399 */;

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
