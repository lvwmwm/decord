// Module ID: 4777
// Function ID: 4778
// Name: ToPrimitive
// Dependencies: [4778]

// Module 4777 (ToPrimitive)
import ToPrimitive from "ToPrimitive" /* 4778 */;


export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = ToPrimitive(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive(arg0);
  }
  return tmp3;
};
