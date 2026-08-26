// Module ID: 4728
// Function ID: 4729
// Name: ToPrimitive
// Dependencies: [4729]

// Module 4728 (ToPrimitive)
import ToPrimitive from "ToPrimitive" /* 4729 */;


export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};
