// Module ID: 5114
// Function ID: 5115
// Name: ToPrimitive
// Dependencies: [5115]

// Module 5114 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5115 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
