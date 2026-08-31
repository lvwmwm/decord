// Module ID: 4744
// Function ID: 4745
// Name: ToPrimitive
// Dependencies: [4745]

// Module 4744 (ToPrimitive)
import ToPrimitive from "ToPrimitive" /* 4745 */;


export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};
