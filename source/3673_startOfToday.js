// Module ID: 3673
// Function ID: 28029
// Name: startOfToday
// Dependencies: [3408]
// Exports: default

// Module 3673 (startOfToday)
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
