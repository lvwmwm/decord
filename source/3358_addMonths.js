// Module ID: 3358
// Function ID: 26455
// Name: addMonths
// Dependencies: [3213, 3209, 3210]
// Exports: default

// Module 3358 (addMonths)
import toInteger from "toInteger";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function addMonths(interval, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(interval);
  const defaultResult2 = toInteger.default(defaultResult1);
  if (isNaN(defaultResult2)) {
    const _Date2 = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else if (defaultResult2) {
    const date1 = defaultResult1.getDate();
    const _Date = Date;
    const date2 = new Date(defaultResult1.getTime());
    date2.setMonth(defaultResult1.getMonth() + defaultResult2 + 1, 0);
    let tmp8 = date2;
    if (date1 < date2.getDate()) {
      const fullYear = date2.getFullYear();
      defaultResult1.setFullYear(fullYear, date2.getMonth(), date1);
      tmp8 = defaultResult1;
    }
    return tmp8;
  } else {
    return defaultResult1;
  }
};
export default exports.default;
