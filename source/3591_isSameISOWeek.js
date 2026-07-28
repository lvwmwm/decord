// Module ID: 3591
// Function ID: 27788
// Name: isSameISOWeek
// Dependencies: [3592, 3245]
// Exports: default

// Module 3591 (isSameISOWeek)
import isSameWeek from "isSameWeek";
import requiredArgs from "requiredArgs";


export default function isSameISOWeek(defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  return isSameWeek.default(defaultResult1, defaultResult2, { weekStartsOn: 1 });
};
export default exports.default;
