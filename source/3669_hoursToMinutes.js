// Module ID: 3669
// Function ID: 3670
// Name: hoursToMinutes
// Dependencies: [3381, 3559]
// Exports: default

// Module 3669 (hoursToMinutes)
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
  return Math.floor(arg0 * require(3559) /* keys */.minutesInHour);
};
export default exports.default;
