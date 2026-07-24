// Module ID: 3614
// Function ID: 27846
// Name: previousWednesday
// Dependencies: [3210, 3607]
// Exports: default

// Module 3614 (previousWednesday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 3);
};
export default exports.default;
