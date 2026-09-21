// Module ID: 4274
// Function ID: 4275
// Name: startOfToday
// Dependencies: [4009]
// Exports: default

// Module 4274 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4009 */;

let startOfDay = startOfDay_mod;
if (!startOfDay) {
  const obj = { default: startOfDay };
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
export default exports.default;
