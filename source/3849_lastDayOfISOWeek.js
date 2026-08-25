// Module ID: 3849
// Function ID: 3850
// Name: lastDayOfISOWeek
// Dependencies: [3850, 3477]
// Exports: default

// Module 3849 (lastDayOfISOWeek)
import lastDayOfWeek from "lastDayOfWeek" /* 3850 */;
import requiredArgs from "requiredArgs" /* 3477 */;

if (!lastDayOfWeek) {
  let obj = { default: null };
  obj[0] = lastDayOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = lastDayOfWeek;
}
lastDayOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function lastDayOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return lastDayOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
