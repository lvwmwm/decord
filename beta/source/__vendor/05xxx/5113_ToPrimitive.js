// Module ID: 5113
// Function ID: 5114
// Name: ToPrimitive
// Dependencies: [5114]

// Module 5113 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5114 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
