// Module ID: 3593
// Function ID: 27794
// Name: isSameISOWeekYear
// Dependencies: [3405, 3245]
// Exports: default

// Module 3593 (isSameISOWeekYear)
import startOfISOWeekYear from "startOfISOWeekYear";
import requiredArgs from "requiredArgs";


export default function isSameISOWeekYear(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = startOfISOWeekYear.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time === startOfISOWeekYear.default(defaultResult1).getTime();
};
export default exports.default;
