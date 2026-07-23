// Module ID: 3599
// Function ID: 27794
// Name: nextMonday
// Dependencies: [3597, 3210]
// Exports: default

// Module 3599 (nextMonday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 1);
};
export default exports.default;
