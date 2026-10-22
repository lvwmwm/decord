// Module ID: 6389
// Function ID: 6390
// Name: ToPrimitive
// Dependencies: [6390]

// Module 6389 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6390 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
