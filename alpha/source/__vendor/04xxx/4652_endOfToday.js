// Module ID: 4652
// Function ID: 4653
// Name: endOfToday
// Dependencies: [4623]
// Exports: default

// Module 4652 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4623 */;

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
