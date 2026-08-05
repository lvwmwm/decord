// Module ID: 3624
// Function ID: 3625
// Name: hoursToSeconds
// Dependencies: [3335, 3513]
// Exports: default

// Module 3624 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3513) /* keys */.secondsInHour);
};
export default exports.default;
