// Module ID: 4140
// Function ID: 4141
// Name: endOfToday
// Dependencies: [4111]
// Exports: default

// Module 4140 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4111 */;

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
