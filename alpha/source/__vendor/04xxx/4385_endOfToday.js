// Module ID: 4385
// Function ID: 4386
// Name: endOfToday
// Dependencies: [4356]
// Exports: default

// Module 4385 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4356 */;

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
