// Module ID: 3626
// Function ID: 27888
// Name: setDayOfYear
// Dependencies: [3214, 3210, 3211]
// Exports: default

// Module 3626 (setDayOfYear)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function setDayOfYear(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMonth(0);
  defaultResult1.setDate(toInteger.default(defaultResult1));
  return defaultResult1;
};
export default exports.default;
