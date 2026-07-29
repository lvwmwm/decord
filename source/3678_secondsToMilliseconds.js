// Module ID: 3678
// Function ID: 3679
// Name: secondsToMilliseconds
// Dependencies: [3269, 3447]
// Exports: default

// Module 3678 (secondsToMilliseconds)
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
  return arg0 * require(3447) /* keys */.millisecondsInSecond;
};
export default exports.default;
