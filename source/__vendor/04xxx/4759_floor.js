// Module ID: 4759
// Function ID: 4760
// Name: floor
// Dependencies: [566]

// Module 4759 (floor)
import _mod566 from "module_566" /* 566 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod566(arg0);
  }
  return tmp;
};
