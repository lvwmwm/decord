// Module ID: 3618
// Function ID: 3619
// Name: daysToWeeks
// Dependencies: [3441, 3619]
// Exports: default

// Module 3618 (daysToWeeks)
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
  return Math.floor(arg0 / require(3619) /* keys */.daysInWeek);
};
export default exports.default;
