// Module ID: 3556
// Function ID: 27683
// Name: startOfHour
// Dependencies: [3210, 3211]
// Exports: default

// Module 3556 (startOfHour)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfHour(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
export default exports.default;
