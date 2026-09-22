// Module ID: 3954
// Function ID: 3955
// Name: endOfToday
// Dependencies: [3925]
// Exports: default

// Module 3954 (endOfToday)
import endOfDay_mod from "endOfDay" /* 3925 */;

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
