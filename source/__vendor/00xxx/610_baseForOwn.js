// Module ID: 610
// Function ID: 611
// Name: baseForOwn
// Dependencies: [611, 613]

// Module 610 (baseForOwn)
import createBaseFor from "createBaseFor" /* 611 */;
import keys from "keys" /* 613 */;


export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = createBaseFor(arg0, arg1, keys);
    const tmp5 = createBaseFor;
  }
  return tmp;
};
