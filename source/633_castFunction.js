// Module ID: 633
// Function ID: 634
// Name: castFunction
// Dependencies: [634]

// Module 633 (castFunction)

export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = require(634) /* identity */;
  }
  return tmp;
};
