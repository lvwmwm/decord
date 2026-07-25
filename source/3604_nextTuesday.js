// Module ID: 3604
// Function ID: 27818
// Name: nextTuesday
// Dependencies: [3598, 3211]
// Exports: default

// Module 3604 (nextTuesday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 2);
};
export default exports.default;
