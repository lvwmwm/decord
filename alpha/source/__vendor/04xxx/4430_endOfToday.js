// Module ID: 4430
// Function ID: 4431
// Name: endOfToday
// Dependencies: [4401]
// Exports: default

// Module 4430 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4401 */;

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
