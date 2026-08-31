// Module ID: 3771
// Function ID: 3772
// Name: endOfToday
// Dependencies: [3742]
// Exports: default

// Module 3771 (endOfToday)
import endOfDay from "endOfDay" /* 3742 */;

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
