// Module ID: 4001
// Function ID: 4002
// Name: startOfToday
// Dependencies: [3736]
// Exports: default

// Module 4001 (startOfToday)
import startOfDay from "startOfDay" /* 3736 */;

if (!startOfDay) {
  const obj = { default: null };
  obj[0] = startOfDay;
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
export default exports.default;
