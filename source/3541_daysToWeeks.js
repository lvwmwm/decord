// Module ID: 3541
// Function ID: 3542
// Name: daysToWeeks
// Dependencies: [3364, 3542]
// Exports: default

// Module 3541 (daysToWeeks)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function daysToWeeks(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3542) /* keys */.daysInWeek);
};
export default exports.default;
