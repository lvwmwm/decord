// Module ID: 5881
// Function ID: 5882
// Name: ToPrimitive
// Dependencies: [5882]

// Module 5881 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5882 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
