// Module ID: 3483
// Function ID: 26889
// Name: getISOWeeksInYear
// Dependencies: [3371, 3378, 3211]
// Exports: default

// Module 3483 (getISOWeeksInYear)
import startOfISOWeekYear from "startOfISOWeekYear";
import addWeeks from "addWeeks";
import requiredArgs from "requiredArgs";

let c3 = 604800000;

export default function getISOWeeksInYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = startOfISOWeekYear.default(defaultResult1);
  const defaultResult2 = startOfISOWeekYear.default(addWeeks.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(addWeeks.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;
