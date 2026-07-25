// Module ID: 3446
// Function ID: 26771
// Name: getUTCISOWeek
// Dependencies: [3210, 3447, 3448, 3211]
// Exports: default

// Module 3446 (getUTCISOWeek)
import _typeof from "_typeof";
import startOfUTCISOWeek from "startOfUTCISOWeek";
import startOfUTCISOWeekYear from "startOfUTCISOWeekYear";
import requiredArgs from "requiredArgs";

let c4 = 604800000;

export default function getUTCISOWeek(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = startOfUTCISOWeek.default(defaultResult1).getTime();
  const defaultResult2 = startOfUTCISOWeek.default(defaultResult1);
  return Math.round((time - startOfUTCISOWeekYear.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;
