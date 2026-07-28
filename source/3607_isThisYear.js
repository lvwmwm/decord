// Module ID: 3607
// Function ID: 27836
// Name: isThisYear
// Dependencies: [3599, 3245]
// Exports: default

// Module 3607 (isThisYear)
import isSameYear from "isSameYear";
import requiredArgs from "requiredArgs";


export default function isThisYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(defaultResult1, Date.now());
};
export default exports.default;
