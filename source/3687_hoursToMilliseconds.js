// Module ID: 3687
// Function ID: 3688
// Name: hoursToMilliseconds
// Dependencies: [3400, 3578]
// Exports: default

// Module 3687 (hoursToMilliseconds)
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
  return Math.floor(arg0 * require(3578) /* keys */.millisecondsInHour);
};
export default exports.default;
