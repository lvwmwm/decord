// Module ID: 3358
// Function ID: 26464
// Name: addDays
// Dependencies: [3214, 3210, 3211]
// Exports: default

// Module 3358 (addDays)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function addDays(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = toInteger.default(defaultResult1);
  if (isNaN(defaultResult2)) {
    const _Date = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    defaultResult1.setDate(defaultResult1.getDate() + defaultResult2);
    return defaultResult1;
  } else {
    return defaultResult1;
  }
};
export default exports.default;
