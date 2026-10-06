// Module ID: 4193
// Function ID: 4194
// Name: endOfToday
// Dependencies: [4164]
// Exports: default

// Module 4193 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4164 */;

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
