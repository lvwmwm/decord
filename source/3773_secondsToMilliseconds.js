// Module ID: 3773
// Function ID: 3774
// Name: secondsToMilliseconds
// Dependencies: [3364, 3542]
// Exports: default

// Module 3773 (secondsToMilliseconds)
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
  return arg0 * require(3542) /* keys */.millisecondsInSecond;
};
export default exports.default;
