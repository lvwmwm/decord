// Module ID: 3558
// Function ID: 27680
// Name: isSameISOWeekYear
// Dependencies: [3370, 3210]
// Exports: default

// Module 3558 (isSameISOWeekYear)
import startOfISOWeekYear from "startOfISOWeekYear";
import requiredArgs from "requiredArgs";


export default function isSameISOWeekYear(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfISOWeekYear.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfISOWeekYear.default(defaultResult1).getTime();
};
export default exports.default;
