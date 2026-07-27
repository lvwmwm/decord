// Module ID: 3450
// Function ID: 26784
// Name: getUTCWeek
// Dependencies: [3210, 3213, 3451, 3211]
// Exports: default

// Module 3450 (getUTCWeek)
import _typeof from "_typeof";
import startOfUTCWeek from "startOfUTCWeek";
import startOfUTCWeekYear from "startOfUTCWeekYear";
import requiredArgs from "requiredArgs";

let c4 = 604800000;

export default function getUTCWeek(defaultResult1, defaultResult2) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = startOfUTCWeek.default(defaultResult1, defaultResult2).getTime();
  defaultResult2 = startOfUTCWeek.default(defaultResult1, defaultResult2);
  return Math.round((time - startOfUTCWeekYear.default(defaultResult1, defaultResult2).getTime()) / c4) + 1;
};
export default exports.default;
