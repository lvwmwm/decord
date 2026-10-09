// Module ID: 4387
// Function ID: 4388
// Name: endOfToday
// Dependencies: [4358]
// Exports: default

// Module 4387 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4358 */;

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
