// Module ID: 3611
// Function ID: 27836
// Name: previousSunday
// Dependencies: [3210, 3607]
// Exports: default

// Module 3611 (previousSunday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 0);
};
export default exports.default;
