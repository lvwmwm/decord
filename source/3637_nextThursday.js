// Module ID: 3637
// Function ID: 27918
// Name: nextThursday
// Dependencies: [3632, 3245]
// Exports: default

// Module 3637 (nextThursday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 4);
};
export default exports.default;
