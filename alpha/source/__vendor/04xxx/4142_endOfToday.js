// Module ID: 4142
// Function ID: 4143
// Name: endOfToday
// Dependencies: [4113]
// Exports: default

// Module 4142 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4113 */;

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
