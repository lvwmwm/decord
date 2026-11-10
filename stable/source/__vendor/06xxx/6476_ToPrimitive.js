// Module ID: 6476
// Function ID: 6477
// Name: ToPrimitive
// Dependencies: [6477]

// Module 6476 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6477 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
