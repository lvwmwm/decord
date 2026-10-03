// Module ID: 4187
// Function ID: 4188
// Name: endOfToday
// Dependencies: [4158]
// Exports: default

// Module 4187 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4158 */;

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
