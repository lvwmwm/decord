// Module ID: 3603
// Function ID: 27816
// Name: nextThursday
// Dependencies: [3598, 3211]
// Exports: default

// Module 3603 (nextThursday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 4);
};
export default exports.default;
