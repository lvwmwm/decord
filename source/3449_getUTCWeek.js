// Module ID: 3449
// Function ID: 26772
// Name: getUTCWeek
// Dependencies: [3209, 3212, 3450, 3210]
// Exports: default

// Module 3449 (getUTCWeek)
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
