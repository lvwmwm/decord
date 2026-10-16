// Module ID: 5884
// Function ID: 5885
// Name: ToPrimitive
// Dependencies: [5885]

// Module 5884 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5885 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
