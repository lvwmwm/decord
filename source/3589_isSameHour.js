// Module ID: 3589
// Function ID: 27782
// Name: isSameHour
// Dependencies: [3590, 3245]
// Exports: default

// Module 3589 (isSameHour)
import startOfHour from "startOfHour";
import requiredArgs from "requiredArgs";


export default function isSameHour(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfHour.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfHour.default(defaultResult1).getTime();
};
export default exports.default;
