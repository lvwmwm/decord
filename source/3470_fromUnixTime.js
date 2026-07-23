// Module ID: 3470
// Function ID: 26841
// Name: fromUnixTime
// Dependencies: [3209, 3213, 3210]
// Exports: default

// Module 3470 (fromUnixTime)
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";


export default function fromUnixTime(defaultResult1) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * toInteger.default(defaultResult1));
};
export default exports.default;
