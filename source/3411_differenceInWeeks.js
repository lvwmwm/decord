// Module ID: 3411
// Function ID: 26619
// Name: differenceInWeeks
// Dependencies: [3446, 3444, 3208]
// Exports: default

// Module 3411 (differenceInWeeks)
import getUTCISOWeekYear from "getUTCISOWeekYear";
import startOfUTCISOWeek from "startOfUTCISOWeek";


export default function differenceInWeeks(defaultResult1, defaultResult2, roundingMethod) {
  startOfUTCISOWeek.default(2, arguments);
  const result = getUTCISOWeekYear.default(defaultResult1, defaultResult2) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(dependencyMap[2]).getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
