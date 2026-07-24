// Module ID: 3489
// Function ID: 26898
// Name: getUnixTime
// Dependencies: [3488, 3210]
// Exports: default

// Module 3489 (getUnixTime)
import getTime from "getTime";
import requiredArgs from "requiredArgs";


export default function getUnixTime(defaultResult1) {
  requiredArgs.default(1, arguments);
  return Math.floor(getTime.default(defaultResult1) / 1000);
};
export default exports.default;
