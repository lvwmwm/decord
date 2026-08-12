// Module ID: 3820
// Function ID: 3821
// Name: millisecondsToHours
// Dependencies: [3441, 3619]
// Exports: default

// Module 3820 (millisecondsToHours)
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
  return Math.floor(arg0 / require(3619) /* keys */.millisecondsInHour);
};
export default exports.default;
