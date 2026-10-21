// Module ID: 6383
// Function ID: 6384
// Name: ToPrimitive
// Dependencies: [6384]

// Module 6383 (ToPrimitive)
import ToPrimitive2 from "ToPrimitive" /* 6384 */;


export default function ToPrimitive(arg0) {
  let tmp3;
  if (arguments.length > 1) {
    tmp3 = ToPrimitive2(arg0, arguments[1]);
  } else {
    tmp3 = ToPrimitive2(arg0);
  }
  return tmp3;
};
