// Module ID: 3901
// Function ID: 3902
// Name: startOfToday
// Dependencies: [3636]
// Exports: default

// Module 3901 (startOfToday)
import startOfDay from "startOfDay";

if (!startOfDay) {
  const obj = { default: null };
  obj[0] = startOfDay;
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
let c0 = tmp3;

export default function startOfToday() {
  return tmp3.default(Date.now());
};
export default exports.default;
