// Module ID: 4110
// Function ID: 4111
// Name: endOfToday
// Dependencies: [4081]
// Exports: default

// Module 4110 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4081 */;

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
