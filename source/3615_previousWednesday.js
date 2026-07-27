// Module ID: 3615
// Function ID: 27858
// Name: previousWednesday
// Dependencies: [3211, 3608]
// Exports: default

// Module 3615 (previousWednesday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 3);
};
export default exports.default;
