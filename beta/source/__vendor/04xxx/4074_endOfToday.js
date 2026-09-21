// Module ID: 4074
// Function ID: 4075
// Name: endOfToday
// Dependencies: [4045]
// Exports: default

// Module 4074 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4045 */;

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
