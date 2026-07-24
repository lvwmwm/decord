// Module ID: 3609
// Function ID: 27831
// Name: previousMonday
// Dependencies: [3210, 3607]
// Exports: default

// Module 3609 (previousMonday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 1);
};
export default exports.default;
