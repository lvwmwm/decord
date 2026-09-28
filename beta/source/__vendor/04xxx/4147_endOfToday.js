// Module ID: 4147
// Function ID: 4148
// Name: endOfToday
// Dependencies: [4118]
// Exports: default

// Module 4147 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4118 */;

let endOfDay = endOfDay_mod;
if (!endOfDay) {
  const obj = { default: endOfDay };
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
export default exports.default;
