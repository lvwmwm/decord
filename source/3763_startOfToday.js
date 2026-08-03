// Module ID: 3763
// Function ID: 3764
// Name: startOfToday
// Dependencies: [3498]
// Exports: default

// Module 3763 (startOfToday)
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
