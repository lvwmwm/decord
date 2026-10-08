// Module ID: 5661
// Function ID: 5662
// Name: ToPrimitive
// Dependencies: [5662]

// Module 5661 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5662 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
