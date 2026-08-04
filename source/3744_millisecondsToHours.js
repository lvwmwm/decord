// Module ID: 3744
// Function ID: 3745
// Name: millisecondsToHours
// Dependencies: [3365, 3543]
// Exports: default

// Module 3744 (millisecondsToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3543) /* keys */.millisecondsInHour);
};
export default exports.default;
