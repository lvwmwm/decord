// Module ID: 3466
// Function ID: 26798
// Name: endOfHour
// Dependencies: [3244, 3245]
// Exports: default

// Module 3466 (endOfHour)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfHour(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMinutes(59, 59, 999);
  return defaultResult1;
};
export default exports.default;
