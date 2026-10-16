// Module ID: 5883
// Function ID: 5884
// Name: ToPrimitive
// Dependencies: [5884]

// Module 5883 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5884 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
