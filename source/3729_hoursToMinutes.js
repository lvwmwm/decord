// Module ID: 3729
// Function ID: 3730
// Name: hoursToMinutes
// Dependencies: [3441, 3619]
// Exports: default

// Module 3729 (hoursToMinutes)
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
  return Math.floor(arg0 * require(3619) /* keys */.minutesInHour);
};
export default exports.default;
