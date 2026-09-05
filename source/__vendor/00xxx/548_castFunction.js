// Module ID: 548
// Function ID: 549
// Name: castFunction
// Dependencies: [549]

// Module 548 (castFunction)
import identity from "identity" /* 549 */;


export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity;
  }
  return tmp;
};
