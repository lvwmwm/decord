// Module ID: 3651
// Function ID: 3652
// Name: hoursToMilliseconds
// Dependencies: [3364, 3542]
// Exports: default

// Module 3651 (hoursToMilliseconds)
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
  return Math.floor(arg0 * require(3542) /* keys */.millisecondsInHour);
};
export default exports.default;
