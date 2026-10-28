// Module ID: 6436
// Function ID: 6437
// Name: ToPrimitive
// Dependencies: [6437]

// Module 6436 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6437 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
