// Module ID: 3730
// Function ID: 3731
// Name: hoursToSeconds
// Dependencies: [3441, 3619]
// Exports: default

// Module 3730 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3619) /* keys */.secondsInHour);
};
export default exports.default;
