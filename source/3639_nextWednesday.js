// Module ID: 3639
// Function ID: 27924
// Name: nextWednesday
// Dependencies: [3632, 3245]
// Exports: default

// Module 3639 (nextWednesday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 3);
};
export default exports.default;
