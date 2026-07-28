// Module ID: 3671
// Function ID: 28023
// Name: setYear
// Dependencies: [3248, 3244, 3245]
// Exports: default

// Module 3671 (setYear)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function setYear(date, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(date);
  if (isNaN(defaultResult1.getTime())) {
    const _Date = Date;
    const _NaN = NaN;
    date = new Date(NaN);
    return date;
  } else {
    defaultResult1.setFullYear(defaultResult2);
    return defaultResult1;
  }
  defaultResult2 = toInteger.default(defaultResult1);
};
export default exports.default;
