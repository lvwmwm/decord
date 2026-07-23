// Module ID: 3572
// Function ID: 27721
// Name: isThisYear
// Dependencies: [3564, 3210]
// Exports: default

// Module 3572 (isThisYear)
import isSameYear from "isSameYear";
import requiredArgs from "requiredArgs";


export default function isThisYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  return isSameYear.default(defaultResult1, Date.now());
};
export default exports.default;
