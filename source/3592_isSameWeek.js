// Module ID: 3592
// Function ID: 27791
// Name: isSameWeek
// Dependencies: [3403, 3245]
// Exports: default

// Module 3592 (isSameWeek)
import startOfWeek from "startOfWeek";
import requiredArgs from "requiredArgs";


export default function isSameWeek(defaultResult1, defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1, defaultResult2);
  const time = defaultResult1.getTime();
  return time === startOfWeek.default(defaultResult1, defaultResult2).getTime();
};
export default exports.default;
