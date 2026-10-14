// Module ID: 5343
// Function ID: 5344
// Name: ToPrimitive
// Dependencies: [5344]

// Module 5343 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 5344 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
