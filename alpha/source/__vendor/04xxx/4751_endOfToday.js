// Module ID: 4751
// Function ID: 4752
// Name: endOfToday
// Dependencies: [4722]
// Exports: default

// Module 4751 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4722 */;

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
