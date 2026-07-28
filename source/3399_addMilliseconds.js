// Module ID: 3399
// Function ID: 26588
// Name: addMilliseconds
// Dependencies: [3248, 3244, 3245]
// Exports: default

// Module 3399 (addMilliseconds)
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
