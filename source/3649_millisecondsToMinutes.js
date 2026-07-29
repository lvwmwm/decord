// Module ID: 3649
// Function ID: 3650
// Name: millisecondsToMinutes
// Dependencies: [3269, 3447]
// Exports: default

// Module 3649 (millisecondsToMinutes)
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
  return Math.floor(arg0 / require(3447) /* keys */.millisecondsInMinute);
};
export default exports.default;
