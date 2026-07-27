// Module ID: 3490
// Function ID: 26910
// Name: getUnixTime
// Dependencies: [3489, 3211]
// Exports: default

// Module 3490 (getUnixTime)
import getTime from "getTime";
import requiredArgs from "requiredArgs";


export default function getUnixTime(defaultResult1) {
  requiredArgs.default(1, arguments);
  return Math.floor(getTime.default(defaultResult1) / 1000);
};
export default exports.default;
