// Module ID: 3850
// Function ID: 3851
// Name: secondsToMilliseconds
// Dependencies: [3441, 3619]
// Exports: default

// Module 3850 (secondsToMilliseconds)
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
  return arg0 * require(3619) /* keys */.millisecondsInSecond;
};
export default exports.default;
