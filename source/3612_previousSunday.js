// Module ID: 3612
// Function ID: 27849
// Name: previousSunday
// Dependencies: [3211, 3608]
// Exports: default

// Module 3612 (previousSunday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 0);
};
export default exports.default;
