// Module ID: 3555
// Function ID: 27670
// Name: startOfHour
// Dependencies: [3209, 3210]
// Exports: default

// Module 3555 (startOfHour)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfHour(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
export default exports.default;
