// Module ID: 3689
// Function ID: 3690
// Name: hoursToSeconds
// Dependencies: [3400, 3578]
// Exports: default

// Module 3689 (hoursToSeconds)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function hoursToSeconds(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3578) /* keys */.secondsInHour);
};
export default exports.default;
