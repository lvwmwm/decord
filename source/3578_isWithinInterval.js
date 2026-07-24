// Module ID: 3578
// Function ID: 27740
// Name: isWithinInterval
// Dependencies: [3209, 3210]
// Exports: default

// Module 3578 (isWithinInterval)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isWithinInterval(defaultResult1, start) {
  requiredArgs.default(2, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  defaultResult1 = _typeof.default(defaultResult1);
  const time1 = _typeof.default(start.start).getTime();
  const defaultResult2 = _typeof.default(start.start);
  const time2 = _typeof.default(start.end).getTime();
  if (time1 <= time2) {
    return time >= time1 && time <= time2;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult3 = _typeof.default(start.end);
};
export default exports.default;
