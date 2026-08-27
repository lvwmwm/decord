// Module ID: 633
// Function ID: 634
// Name: castFunction
// Dependencies: [634]

// Module 633 (castFunction)
import identity from "identity" /* 634 */;


export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity;
  }
  return tmp;
};
