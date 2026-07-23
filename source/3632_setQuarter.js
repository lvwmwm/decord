// Module ID: 3632
// Function ID: 27896
// Name: setQuarter
// Dependencies: [3213, 3209, 3622, 3210]
// Exports: default

// Module 3632 (setQuarter)
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
