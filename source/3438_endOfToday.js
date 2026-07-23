// Module ID: 3438
// Function ID: 26704
// Name: endOfToday
// Dependencies: [3409]
// Exports: default

// Module 3438 (endOfToday)
import endOfDay from "endOfDay";

if (!endOfDay) {
  const obj = { default: endOfDay };
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
let closure_0 = tmp3;

export default function endOfToday() {
  return tmp3.default(Date.now());
};
export default exports.default;
