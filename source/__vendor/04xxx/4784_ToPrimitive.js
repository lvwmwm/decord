// Module ID: 4784
// Function ID: 4785
// Name: ToPrimitive
// Dependencies: [4785]

// Module 4784 (ToPrimitive)
import ToPrimitive from "ToPrimitive" /* 4785 */;


export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};
