// Module ID: 3654
// Function ID: 3655
// Name: hoursToSeconds
// Dependencies: [3365, 3543]
// Exports: default

// Module 3654 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3543) /* keys */.secondsInHour);
};
export default exports.default;
