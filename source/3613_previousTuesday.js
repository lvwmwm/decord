// Module ID: 3613
// Function ID: 27842
// Name: previousTuesday
// Dependencies: [3210, 3607]
// Exports: default

// Module 3613 (previousTuesday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 2);
};
export default exports.default;
