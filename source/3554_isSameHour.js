// Module ID: 3554
// Function ID: 27668
// Name: isSameHour
// Dependencies: [3555, 3210]
// Exports: default

// Module 3554 (isSameHour)
import startOfHour from "startOfHour";
import requiredArgs from "requiredArgs";


export default function isSameHour(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfHour.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfHour.default(defaultResult1).getTime();
};
export default exports.default;
