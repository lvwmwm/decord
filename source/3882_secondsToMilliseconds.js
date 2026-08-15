// Module ID: 3882
// Function ID: 3883
// Name: secondsToMilliseconds
// Dependencies: [3473, 3651]
// Exports: default

// Module 3882 (secondsToMilliseconds)
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
  return arg0 * require(3651) /* keys */.millisecondsInSecond;
};
export default exports.default;
