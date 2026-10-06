// Module ID: 5350
// Function ID: 5351
// Name: ToPrimitive
// Dependencies: [5351]

// Module 5350 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5351 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
