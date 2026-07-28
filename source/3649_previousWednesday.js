// Module ID: 3649
// Function ID: 27960
// Name: previousWednesday
// Dependencies: [3245, 3642]
// Exports: default

// Module 3649 (previousWednesday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 3);
};
export default exports.default;
