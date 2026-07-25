// Module ID: 3471
// Function ID: 26853
// Name: fromUnixTime
// Dependencies: [3210, 3214, 3211]
// Exports: default

// Module 3471 (fromUnixTime)
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";


export default function fromUnixTime(defaultResult1) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * toInteger.default(defaultResult1));
};
export default exports.default;
