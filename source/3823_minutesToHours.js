// Module ID: 3823
// Function ID: 3824
// Name: minutesToHours
// Dependencies: [3441, 3619]
// Exports: default

// Module 3823 (minutesToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function minutesToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3619) /* keys */.minutesInHour);
};
export default exports.default;
