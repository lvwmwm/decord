// Module ID: 3481
// Function ID: 26873
// Name: getISOWeek
// Dependencies: [3209, 3367, 3370, 3210]
// Exports: default

// Module 3481 (getISOWeek)
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
