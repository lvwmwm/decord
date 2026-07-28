// Module ID: 3667
// Function ID: 28011
// Name: setQuarter
// Dependencies: [3248, 3244, 3657, 3245]
// Exports: default

// Module 3667 (setQuarter)
import toInteger from "toInteger";
import _typeof from "_typeof";
import setMonth from "setMonth";
import requiredArgs from "requiredArgs";


export default function setQuarter(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const diff = toInteger.default(defaultResult1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return setMonth.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;
