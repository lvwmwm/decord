// Module ID: 3412
// Function ID: 26627
// Name: differenceInYears
// Dependencies: [2281701389, 1929379852, 3446, 3444]
// Exports: default

// Module 3412 (differenceInYears)
import getUTCISOWeekYear from "getUTCISOWeekYear";
import startOfUTCISOWeek from "startOfUTCISOWeek";

let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function differenceInYears(defaultResult1, defaultResult1) {
  startOfUTCISOWeek.default(2, arguments);
  defaultResult1 = closure_0.default(defaultResult1);
  const defaultResult2 = closure_0.default(defaultResult1);
  const defaultResult3 = getUTCISOWeekYear.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(closure_1.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result = defaultResult3 * (absolute - Number(getUTCISOWeekYear.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;
