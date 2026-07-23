// Module ID: 617
// Function ID: 7062
// Name: castFunction
// Dependencies: [618]

// Module 617 (castFunction)

export default function castFunction(arg0) {
  let tmp = arg0;
  if ("function" !== typeof arg0) {
    tmp = require(618) /* identity */;
  }
  return tmp;
};
