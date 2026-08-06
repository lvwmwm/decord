// Module ID: 3652
// Function ID: 3653
// Name: hoursToMinutes
// Dependencies: [3364, 3542]
// Exports: default

// Module 3652 (hoursToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function hoursToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 * require(3542) /* keys */.minutesInHour);
};
export default exports.default;
