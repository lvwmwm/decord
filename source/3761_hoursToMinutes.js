// Module ID: 3761
// Function ID: 3762
// Name: hoursToMinutes
// Dependencies: [3473, 3651]
// Exports: default

// Module 3761 (hoursToMinutes)
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
  return Math.floor(arg0 * require(3651) /* keys */.minutesInHour);
};
export default exports.default;
