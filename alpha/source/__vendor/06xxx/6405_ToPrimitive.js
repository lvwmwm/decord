// Module ID: 6405
// Function ID: 6406
// Name: ToPrimitive
// Dependencies: [6406]

// Module 6405 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6406 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
