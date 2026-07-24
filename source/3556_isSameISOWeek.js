// Module ID: 3556
// Function ID: 27674
// Name: isSameISOWeek
// Dependencies: [3557, 3210]
// Exports: default

// Module 3556 (isSameISOWeek)
import isSameWeek from "isSameWeek";
import requiredArgs from "requiredArgs";


export default function isSameISOWeek(defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  return isSameWeek.default(defaultResult1, defaultResult2, { weekStartsOn: 1 });
};
export default exports.default;
