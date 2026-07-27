// Module ID: 3633
// Function ID: 27909
// Name: setQuarter
// Dependencies: [3214, 3210, 3623, 3211]
// Exports: default

// Module 3633 (setQuarter)
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
