// Module ID: 3744
// Function ID: 3745
// Name: secondsToMilliseconds
// Dependencies: [3335, 3513]
// Exports: default

// Module 3744 (secondsToMilliseconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToMilliseconds(arg0) {
  tmp3.default(1, arguments);
  return arg0 * require(3513) /* keys */.millisecondsInSecond;
};
export default exports.default;
