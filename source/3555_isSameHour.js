// Module ID: 3555
// Function ID: 27680
// Name: isSameHour
// Dependencies: [3556, 3211]
// Exports: default

// Module 3555 (isSameHour)
import startOfHour from "startOfHour";
import requiredArgs from "requiredArgs";


export default function isSameHour(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfHour.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfHour.default(defaultResult1).getTime();
};
export default exports.default;
