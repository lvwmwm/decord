// Module ID: 3853
// Function ID: 3854
// Name: millisecondsToMinutes
// Dependencies: [3473, 3651]
// Exports: default

// Module 3853 (millisecondsToMinutes)
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
  return Math.floor(arg0 / require(3651) /* keys */.millisecondsInMinute);
};
export default exports.default;
