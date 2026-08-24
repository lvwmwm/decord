// Module ID: 3698
// Function ID: 3699
// Name: endOfISOWeek
// Dependencies: [3699, 3476]
// Exports: default

// Module 3698 (endOfISOWeek)
import endOfWeek from "endOfWeek" /* 3699 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!endOfWeek) {
  let obj = { default: null };
  obj[0] = endOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = endOfWeek;
}
endOfWeek = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function endOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
