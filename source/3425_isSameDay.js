// Module ID: 3425
// Function ID: 26672
// Name: isSameDay
// Dependencies: [3408, 3245]
// Exports: default

// Module 3425 (isSameDay)
import startOfDay from "startOfDay";
import requiredArgs from "requiredArgs";


export default function isSameDay(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfDay.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfDay.default(defaultResult1).getTime();
};
export default exports.default;
