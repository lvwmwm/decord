// Module ID: 3612
// Function ID: 27840
// Name: previousThursday
// Dependencies: [3210, 3607]
// Exports: default

// Module 3612 (previousThursday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 4);
};
export default exports.default;
