// Module ID: 4664
// Function ID: 4665
// Name: ToPrimitive
// Dependencies: [4665]

// Module 4664 (ToPrimitive)
import ToPrimitive from "ToPrimitive" /* 4665 */;


export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};
