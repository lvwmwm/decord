// Module ID: 6361
// Function ID: 6362
// Name: ToPrimitive
// Dependencies: [6362]

// Module 6361 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6362 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
