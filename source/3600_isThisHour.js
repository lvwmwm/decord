// Module ID: 3600
// Function ID: 27815
// Name: isThisHour
// Dependencies: [3589, 3245]
// Exports: default

// Module 3600 (isThisHour)
import isSameHour from "isSameHour";
import requiredArgs from "requiredArgs";


export default function isThisHour(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameHour.default(Date.now(), defaultResult2);
};
export default exports.default;
