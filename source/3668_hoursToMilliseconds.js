// Module ID: 3668
// Function ID: 3669
// Name: hoursToMilliseconds
// Dependencies: [3381, 3559]
// Exports: default

// Module 3668 (hoursToMilliseconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function hoursToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3559) /* keys */.millisecondsInHour);
};
export default exports.default;
