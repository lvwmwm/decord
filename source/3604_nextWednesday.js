// Module ID: 3604
// Function ID: 27810
// Name: nextWednesday
// Dependencies: [3597, 3210]
// Exports: default

// Module 3604 (nextWednesday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 3);
};
export default exports.default;
