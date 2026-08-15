// Module ID: 3762
// Function ID: 3763
// Name: hoursToSeconds
// Dependencies: [3473, 3651]
// Exports: default

// Module 3762 (hoursToSeconds)
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
  return Math.floor(arg0 * require(3651) /* keys */.secondsInHour);
};
export default exports.default;
