// Module ID: 6596
// Function ID: 6597
// Name: ToPrimitive
// Dependencies: [6597]

// Module 6596 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6597 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
