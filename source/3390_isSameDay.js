// Module ID: 3390
// Function ID: 26557
// Name: isSameDay
// Dependencies: [3373, 3210]
// Exports: default

// Module 3390 (isSameDay)
import startOfDay from "startOfDay";
import requiredArgs from "requiredArgs";


export default function isSameDay(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfDay.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfDay.default(defaultResult1).getTime();
};
export default exports.default;
