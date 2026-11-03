// Module ID: 4650
// Function ID: 4651
// Name: endOfToday
// Dependencies: [4621]
// Exports: default

// Module 4650 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4621 */;

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
