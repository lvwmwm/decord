// Module ID: 3377
// Function ID: 26520
// Name: addSeconds
// Dependencies: [3214, 3365, 3211]
// Exports: default

// Module 3377 (addSeconds)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";


export default function addSeconds(interval, defaultResult1, byhour, byminute, bysecond) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(interval, 1000 * toInteger.default(defaultResult1));
};
export default exports.default;
