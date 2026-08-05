// Module ID: 3563
// Function ID: 3564
// Name: endOfToday
// Dependencies: [3534]
// Exports: default

// Module 3563 (endOfToday)
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
