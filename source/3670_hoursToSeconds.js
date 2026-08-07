// Module ID: 3670
// Function ID: 3671
// Name: hoursToSeconds
// Dependencies: [3381, 3559]
// Exports: default

// Module 3670 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3559) /* keys */.secondsInHour);
};
export default exports.default;
