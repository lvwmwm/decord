// Module ID: 3879
// Function ID: 3880
// Name: endOfToday
// Dependencies: [3850]
// Exports: default

// Module 3879 (endOfToday)
import endOfDay from "endOfDay" /* 3850 */;

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
