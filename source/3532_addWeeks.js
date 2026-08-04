// Module ID: 3532
// Function ID: 3533
// Name: addWeeks
// Dependencies: [3368, 3512, 3365]
// Exports: default

// Module 3532 (addWeeks)
import toInteger from "toInteger";
import addDays from "addDays";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
let c0 = tmp3;
if (!addDays) {
  obj = { default: null };
  obj[0] = addDays;
  let tmp5 = obj;
} else {
  tmp5 = addDays;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function addWeeks(arg0, arg1) {
  tmp7.default(2, arguments);
  return tmp5.default(arg0, 7 * tmp3.default(arg1));
};
export default exports.default;
