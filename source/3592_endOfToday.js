// Module ID: 3592
// Function ID: 3593
// Name: endOfToday
// Dependencies: [3563]
// Exports: default

// Module 3592 (endOfToday)
import endOfDay from "endOfDay";

if (!endOfDay) {
  const obj = { default: null };
  obj[0] = endOfDay;
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
let c0 = tmp3;

export default function endOfToday() {
  return tmp3.default(Date.now());
};
export default exports.default;
