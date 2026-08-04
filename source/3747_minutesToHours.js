// Module ID: 3747
// Function ID: 3748
// Name: minutesToHours
// Dependencies: [3365, 3543]
// Exports: default

// Module 3747 (minutesToHours)
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
  return Math.floor(arg0 / require(3543) /* keys */.minutesInHour);
};
export default exports.default;
