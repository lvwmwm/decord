// Module ID: 6404
// Function ID: 6405
// Name: ToPrimitive
// Dependencies: [6405]

// Module 6404 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6405 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
