// Module ID: 4651
// Function ID: 4652
// Name: endOfToday
// Dependencies: [4622]
// Exports: default

// Module 4651 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4622 */;

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
