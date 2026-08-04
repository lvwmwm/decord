// Module ID: 3773
// Function ID: 3774
// Name: secondsToHours
// Dependencies: [3365, 3543]
// Exports: default

// Module 3773 (secondsToHours)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToHours(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3543) /* keys */.secondsInHour);
};
export default exports.default;
