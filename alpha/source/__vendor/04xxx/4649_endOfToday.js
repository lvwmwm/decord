// Module ID: 4649
// Function ID: 4650
// Name: endOfToday
// Dependencies: [4620]
// Exports: default

// Module 4649 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4620 */;

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
