// Module ID: 3602
// Function ID: 27803
// Name: nextThursday
// Dependencies: [3597, 3210]
// Exports: default

// Module 3602 (nextThursday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 4);
};
export default exports.default;
