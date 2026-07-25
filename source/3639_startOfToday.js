// Module ID: 3639
// Function ID: 27926
// Name: startOfToday
// Dependencies: [3374]
// Exports: default

// Module 3639 (startOfToday)
import startOfDay from "startOfDay";

if (!startOfDay) {
  const obj = { default: startOfDay };
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
let closure_0 = tmp3;

export default function startOfToday() {
  return tmp3.default(Date.now());
};
export default exports.default;
