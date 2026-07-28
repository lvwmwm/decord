// Module ID: 3516
// Function ID: 26988
// Name: getISOWeek
// Dependencies: [3244, 3402, 3405, 3245]
// Exports: default

// Module 3516 (getISOWeek)
import _typeof from "_typeof";
import startOfISOWeek from "startOfISOWeek";
import startOfISOWeekYear from "startOfISOWeekYear";
import requiredArgs from "requiredArgs";

let c4 = 604800000;

export default function getISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = startOfISOWeek.default(defaultResult1).getTime();
  const defaultResult2 = startOfISOWeek.default(defaultResult1);
  return Math.round((time - startOfISOWeekYear.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;
