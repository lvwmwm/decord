// Module ID: 4566
// Function ID: 4567
// Name: Type
// Dependencies: [4498]

// Module 4566 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4498) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
