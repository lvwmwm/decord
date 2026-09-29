// Module ID: 4106
// Function ID: 4107
// Name: endOfToday
// Dependencies: [4077]
// Exports: default

// Module 4106 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4077 */;

let endOfDay = endOfDay_mod;
if (!endOfDay) {
  const obj = { default: endOfDay };
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
export default exports.default;
