// Module ID: 4678
// Function ID: 4679
// Name: Type
// Dependencies: [4610]

// Module 4678 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4610) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
