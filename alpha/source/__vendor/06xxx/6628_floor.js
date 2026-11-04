// Module ID: 6628
// Function ID: 6629
// Name: floor
// Dependencies: [1318]

// Module 6628 (floor)
import _mod1318 from "module_1318" /* 1318 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1318(arg0);
  }
  return tmp;
};
