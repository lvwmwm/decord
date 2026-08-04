// Module ID: 3774
// Function ID: 3775
// Name: secondsToMilliseconds
// Dependencies: [3365, 3543]
// Exports: default

// Module 3774 (secondsToMilliseconds)
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
  return arg0 * require(3543) /* keys */.millisecondsInSecond;
};
export default exports.default;
