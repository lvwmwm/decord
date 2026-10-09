// Module ID: 5662
// Function ID: 5663
// Name: ToPrimitive
// Dependencies: [5663]

// Module 5662 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5663 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
