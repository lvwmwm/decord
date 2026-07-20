// Module ID: 4366
// Function ID: 38701
// Name: Type
// Dependencies: []

// Module 4366 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if ("symbol" !== typeof arg0) {
    let str2 = "BigInt";
    if ("bigint" !== tmp) {
      str2 = require(dependencyMap[0])(arg0);
    }
    str = str2;
  }
  return str;
};
