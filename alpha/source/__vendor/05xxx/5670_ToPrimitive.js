// Module ID: 5670
// Function ID: 5671
// Name: ToPrimitive
// Dependencies: [5671]

// Module 5670 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5671 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
