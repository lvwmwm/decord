// Module ID: 3610
// Function ID: 27842
// Name: previousMonday
// Dependencies: [3211, 3608]
// Exports: default

// Module 3610 (previousMonday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 1);
};
export default exports.default;
