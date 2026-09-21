// Module ID: 4078
// Function ID: 4079
// Name: endOfToday
// Dependencies: [4049]
// Exports: default

// Module 4078 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4049 */;

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
