// Module ID: 3556
// Function ID: 3557
// Name: hoursToMilliseconds
// Dependencies: [3269, 3447]
// Exports: default

// Module 3556 (hoursToMilliseconds)
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
  return Math.floor(arg0 * require(3447) /* keys */.millisecondsInHour);
};
export default exports.default;
