// Module ID: 3904
// Function ID: 3905
// Name: startOfToday
// Dependencies: [3639]
// Exports: default

// Module 3904 (startOfToday)
import startOfDay from "startOfDay" /* 3639 */;

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
