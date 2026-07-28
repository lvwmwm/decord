// Module ID: 3647
// Function ID: 27954
// Name: previousThursday
// Dependencies: [3245, 3642]
// Exports: default

// Module 3647 (previousThursday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 4);
};
export default exports.default;
