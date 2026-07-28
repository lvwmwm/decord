// Module ID: 3524
// Function ID: 27012
// Name: getUnixTime
// Dependencies: [3523, 3245]
// Exports: default

// Module 3524 (getUnixTime)
import getTime from "getTime";
import requiredArgs from "requiredArgs";


export default function getUnixTime(defaultResult1) {
  requiredArgs.default(1, arguments);
  return Math.floor(getTime.default(defaultResult1) / 1000);
};
export default exports.default;
