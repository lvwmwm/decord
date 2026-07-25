// Module ID: 3613
// Function ID: 27851
// Name: previousThursday
// Dependencies: [3211, 3608]
// Exports: default

// Module 3613 (previousThursday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 4);
};
export default exports.default;
