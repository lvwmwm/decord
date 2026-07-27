// Module ID: 3566
// Function ID: 27713
// Name: isThisHour
// Dependencies: [3555, 3211]
// Exports: default

// Module 3566 (isThisHour)
import isSameHour from "isSameHour";
import requiredArgs from "requiredArgs";


export default function isThisHour(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameHour.default(Date.now(), defaultResult2);
};
export default exports.default;
