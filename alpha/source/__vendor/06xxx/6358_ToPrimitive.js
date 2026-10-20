// Module ID: 6358
// Function ID: 6359
// Name: ToPrimitive
// Dependencies: [6359]

// Module 6358 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6359 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
