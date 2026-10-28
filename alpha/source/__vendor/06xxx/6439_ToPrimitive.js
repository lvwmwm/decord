// Module ID: 6439
// Function ID: 6440
// Name: ToPrimitive
// Dependencies: [6440]

// Module 6439 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6440 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
