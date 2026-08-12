// Module ID: 3821
// Function ID: 3822
// Name: millisecondsToMinutes
// Dependencies: [3441, 3619]
// Exports: default

// Module 3821 (millisecondsToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function millisecondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3619) /* keys */.millisecondsInMinute);
};
export default exports.default;
