// Module ID: 3613
// Function ID: 3614
// Name: subMilliseconds
// Dependencies: [3535, 3381, 3384]
// Exports: default

// Module 3613 (subMilliseconds)
import addMilliseconds from "addMilliseconds";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

if (!addMilliseconds) {
  let obj = { default: null };
  obj[0] = addMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = addMilliseconds;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}

export default function subMilliseconds(arg0, arg1) {
  tmp5.default(2, arguments);
  return tmp3.default(arg0, -tmp7.default(arg1));
};
export default exports.default;
