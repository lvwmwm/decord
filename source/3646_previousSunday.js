// Module ID: 3646
// Function ID: 27951
// Name: previousSunday
// Dependencies: [3245, 3642]
// Exports: default

// Module 3646 (previousSunday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";


export default function previousSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return previousDay.default(defaultResult1, 0);
};
export default exports.default;
