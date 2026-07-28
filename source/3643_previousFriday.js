// Module ID: 3643
// Function ID: 27942
// Name: previousFriday
// Dependencies: [3245, 3642]
// Exports: default

// Module 3643 (previousFriday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 5);
};
export default exports.default;
