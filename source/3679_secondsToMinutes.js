// Module ID: 3679
// Function ID: 3680
// Name: secondsToMinutes
// Dependencies: [3269, 3447]
// Exports: default

// Module 3679 (secondsToMinutes)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function secondsToMinutes(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3447) /* keys */.secondsInMinute);
};
export default exports.default;
