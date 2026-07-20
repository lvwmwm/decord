// Module ID: 3412
// Function ID: 26622
// Name: differenceInYears
// Dependencies: [3207, 3208, 3444, 3207]
// Exports: default

// Module 3412 (differenceInYears)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import startOfUTCISOWeek from "startOfUTCISOWeek";
import _typeof from "_typeof";


export default function differenceInYears(defaultResult1, defaultResult1) {
  _typeof.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  const defaultResult3 = startOfUTCISOWeek.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(requiredArgs.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result = defaultResult3 * (absolute - Number(startOfUTCISOWeek.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;
