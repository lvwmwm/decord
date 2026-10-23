// Module ID: 6402
// Function ID: 6403
// Name: ToPrimitive
// Dependencies: [6403]

// Module 6402 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6403 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
