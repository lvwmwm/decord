// Module ID: 3365
// Function ID: 26485
// Name: addMilliseconds
// Dependencies: [3214, 3210, 3211]
// Exports: default

// Module 3365 (addMilliseconds)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function addMilliseconds(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  defaultResult1 = _typeof.default(defaultResult1);
  return new Date(time + toInteger.default(defaultResult1));
};
export default exports.default;
