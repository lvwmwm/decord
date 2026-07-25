// Module ID: 3611
// Function ID: 27845
// Name: previousSaturday
// Dependencies: [3211, 3608]
// Exports: default

// Module 3611 (previousSaturday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 6);
};
export default exports.default;
