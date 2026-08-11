// Module ID: 3809
// Function ID: 3810
// Name: secondsToMilliseconds
// Dependencies: [3400, 3578]
// Exports: default

// Module 3809 (secondsToMilliseconds)
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
  return arg0 * require(3578) /* keys */.millisecondsInSecond;
};
export default exports.default;
