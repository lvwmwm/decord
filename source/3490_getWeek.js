// Module ID: 3490
// Function ID: 26901
// Name: getWeek
// Dependencies: [3368, 3491, 3209, 3210]
// Exports: default

// Module 3490 (getWeek)
import startOfWeek from "startOfWeek";
import startOfWeekYear from "startOfWeekYear";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

let c4 = 604800000;

export default function getWeek(defaultResult1, defaultResult2) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = startOfWeek.default(defaultResult1, defaultResult2).getTime();
  defaultResult2 = startOfWeek.default(defaultResult1, defaultResult2);
  return Math.round((time - startOfWeekYear.default(defaultResult1, defaultResult2).getTime()) / c4) + 1;
};
export default exports.default;
