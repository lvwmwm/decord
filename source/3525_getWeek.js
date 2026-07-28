// Module ID: 3525
// Function ID: 27015
// Name: getWeek
// Dependencies: [3403, 3526, 3244, 3245]
// Exports: default

// Module 3525 (getWeek)
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
