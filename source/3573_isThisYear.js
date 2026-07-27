// Module ID: 3573
// Function ID: 27734
// Name: isThisYear
// Dependencies: [3565, 3211]
// Exports: default

// Module 3573 (isThisYear)
import isSameYear from "isSameYear";
import requiredArgs from "requiredArgs";


export default function isThisYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(defaultResult1, Date.now());
};
export default exports.default;
