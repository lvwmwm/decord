// Module ID: 4818
// Function ID: 4819
// Name: endOfToday
// Dependencies: [4789]
// Exports: default

// Module 4818 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4789 */;

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
