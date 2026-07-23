// Module ID: 3598
// Function ID: 27791
// Name: nextFriday
// Dependencies: [3597, 3210]
// Exports: default

// Module 3598 (nextFriday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 5);
};
export default exports.default;
