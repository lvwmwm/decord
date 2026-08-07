// Module ID: 3790
// Function ID: 3791
// Name: secondsToMilliseconds
// Dependencies: [3381, 3559]
// Exports: default

// Module 3790 (secondsToMilliseconds)
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
  return arg0 * require(3559) /* keys */.millisecondsInSecond;
};
export default exports.default;
