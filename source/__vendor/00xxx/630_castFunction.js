// Module ID: 630
// Function ID: 631
// Name: castFunction
// Dependencies: [631]

// Module 630 (castFunction)
import identity from "identity" /* 631 */;


export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity;
  }
  return tmp;
};
