// Module ID: 3608
// Function ID: 27828
// Name: previousFriday
// Dependencies: [3210, 3607]
// Exports: default

// Module 3608 (previousFriday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 5);
};
export default exports.default;
