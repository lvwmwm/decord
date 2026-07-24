// Module ID: 3376
// Function ID: 26509
// Name: addSeconds
// Dependencies: [3213, 3364, 3210]
// Exports: default

// Module 3376 (addSeconds)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";


export default function addSeconds(interval, defaultResult1, byhour, byminute, bysecond) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(interval, 1000 * toInteger.default(defaultResult1));
};
export default exports.default;
