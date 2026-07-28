// Module ID: 3648
// Function ID: 27957
// Name: previousTuesday
// Dependencies: [3245, 3642]
// Exports: default

// Module 3648 (previousTuesday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 2);
};
export default exports.default;
