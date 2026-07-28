// Module ID: 3590
// Function ID: 27785
// Name: startOfHour
// Dependencies: [3244, 3245]
// Exports: default

// Module 3590 (startOfHour)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfHour(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
export default exports.default;
