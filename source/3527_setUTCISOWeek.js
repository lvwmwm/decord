// Module ID: 3527
// Function ID: 27246
// Name: setUTCISOWeek
// Dependencies: [3355, 3470, 3208, 3595]
// Exports: default

// Module 3527 (setUTCISOWeek)
import addDays from "addDays";
import getDay from "getDay";
import requiredArgs from "requiredArgs";
import nextDay from "nextDay";


export default function setUTCISOWeek(defaultResult1, defaultResult1) {
  nextDay.default(2, arguments);
  defaultResult1 = getDay.default(defaultResult1);
  const diff = requiredArgs.default(defaultResult1) - addDays.default(defaultResult1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
