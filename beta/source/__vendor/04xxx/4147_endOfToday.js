// Module ID: 4147
// Function ID: 4148
// Name: endOfToday
// Dependencies: [4118]
// Exports: default

// Module 4147 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4118 */;

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
