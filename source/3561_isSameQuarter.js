// Module ID: 3561
// Function ID: 27689
// Name: isSameQuarter
// Dependencies: [3421, 3210]
// Exports: default

// Module 3561 (isSameQuarter)
import startOfQuarter from "startOfQuarter";
import requiredArgs from "requiredArgs";


export default function isSameQuarter(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfQuarter.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfQuarter.default(defaultResult1).getTime();
};
export default exports.default;
