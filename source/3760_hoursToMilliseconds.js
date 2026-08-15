// Module ID: 3760
// Function ID: 3761
// Name: hoursToMilliseconds
// Dependencies: [3473, 3651]
// Exports: default

// Module 3760 (hoursToMilliseconds)
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
  return Math.floor(arg0 * require(3651) /* keys */.millisecondsInHour);
};
export default exports.default;
