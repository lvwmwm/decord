// Module ID: 3614
// Function ID: 27854
// Name: previousTuesday
// Dependencies: [3211, 3608]
// Exports: default

// Module 3614 (previousTuesday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 2);
};
export default exports.default;
