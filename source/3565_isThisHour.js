// Module ID: 3565
// Function ID: 27700
// Name: isThisHour
// Dependencies: [3554, 3210]
// Exports: default

// Module 3565 (isThisHour)
import isSameHour from "isSameHour";
import requiredArgs from "requiredArgs";


export default function isThisHour(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameHour.default(Date.now(), defaultResult2);
};
export default exports.default;
