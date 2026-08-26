// Module ID: 3769
// Function ID: 3770
// Name: endOfToday
// Dependencies: [3740]
// Exports: default

// Module 3769 (endOfToday)
import endOfDay from "endOfDay" /* 3740 */;

if (!endOfDay) {
  const obj = { default: null };
  obj[0] = endOfDay;
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
export default exports.default;
