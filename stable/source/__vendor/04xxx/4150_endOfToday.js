// Module ID: 4150
// Function ID: 4151
// Name: endOfToday
// Dependencies: [4121]
// Exports: default

// Module 4150 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4121 */;

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
