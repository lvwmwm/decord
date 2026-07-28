// Module ID: 3645
// Function ID: 27948
// Name: previousSaturday
// Dependencies: [3245, 3642]
// Exports: default

// Module 3645 (previousSaturday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 6);
};
export default exports.default;
