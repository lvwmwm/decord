// Module ID: 5921
// Function ID: 5922
// Name: ToPrimitive
// Dependencies: [5922]

// Module 5921 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5922 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
