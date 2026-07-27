// Module ID: 3562
// Function ID: 27701
// Name: isSameQuarter
// Dependencies: [3422, 3211]
// Exports: default

// Module 3562 (isSameQuarter)
import startOfQuarter from "startOfQuarter";
import requiredArgs from "requiredArgs";


export default function isSameQuarter(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfQuarter.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfQuarter.default(defaultResult1).getTime();
};
export default exports.default;
