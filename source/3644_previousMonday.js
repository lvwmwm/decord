// Module ID: 3644
// Function ID: 27945
// Name: previousMonday
// Dependencies: [3245, 3642]
// Exports: default

// Module 3644 (previousMonday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 1);
};
export default exports.default;
