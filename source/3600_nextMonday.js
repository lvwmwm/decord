// Module ID: 3600
// Function ID: 27806
// Name: nextMonday
// Dependencies: [3598, 3211]
// Exports: default

// Module 3600 (nextMonday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 1);
};
export default exports.default;
