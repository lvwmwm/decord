// Module ID: 3610
// Function ID: 27834
// Name: previousSaturday
// Dependencies: [3210, 3607]
// Exports: default

// Module 3610 (previousSaturday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 6);
};
export default exports.default;
