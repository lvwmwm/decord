// Module ID: 3411
// Function ID: 26623
// Name: addSeconds
// Dependencies: [3248, 3399, 3245]
// Exports: default

// Module 3411 (addSeconds)
import toInteger from "toInteger";
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";


export default function addSeconds(interval, defaultResult1, byhour, byminute, bysecond) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(interval, 1000 * toInteger.default(defaultResult1));
};
export default exports.default;
