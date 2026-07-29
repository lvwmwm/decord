// Module ID: 3558
// Function ID: 3559
// Name: hoursToSeconds
// Dependencies: [3269, 3447]
// Exports: default

// Module 3558 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3447) /* keys */.secondsInHour);
};
export default exports.default;
