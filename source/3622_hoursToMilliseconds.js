// Module ID: 3622
// Function ID: 3623
// Name: hoursToMilliseconds
// Dependencies: [3335, 3513]
// Exports: default

// Module 3622 (hoursToMilliseconds)
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
  return Math.floor(arg0 * require(3513) /* keys */.millisecondsInHour);
};
export default exports.default;
