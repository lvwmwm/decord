// Module ID: 3505
// Function ID: 26956
// Name: fromUnixTime
// Dependencies: [3244, 3248, 3245]
// Exports: default

// Module 3505 (fromUnixTime)
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";


export default function fromUnixTime(defaultResult1) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * toInteger.default(defaultResult1));
};
export default exports.default;
