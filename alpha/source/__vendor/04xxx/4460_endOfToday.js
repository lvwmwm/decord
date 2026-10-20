// Module ID: 4460
// Function ID: 4461
// Name: endOfToday
// Dependencies: [4431]
// Exports: default

// Module 4460 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4431 */;

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
