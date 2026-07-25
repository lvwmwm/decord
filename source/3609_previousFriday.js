// Module ID: 3609
// Function ID: 27839
// Name: previousFriday
// Dependencies: [3211, 3608]
// Exports: default

// Module 3609 (previousFriday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 5);
};
export default exports.default;
