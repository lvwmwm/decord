// Module ID: 5665
// Function ID: 5666
// Name: ToPrimitive
// Dependencies: [5666]

// Module 5665 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5666 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
