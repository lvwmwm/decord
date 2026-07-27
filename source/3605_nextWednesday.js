// Module ID: 3605
// Function ID: 27822
// Name: nextWednesday
// Dependencies: [3598, 3211]
// Exports: default

// Module 3605 (nextWednesday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 3);
};
export default exports.default;
