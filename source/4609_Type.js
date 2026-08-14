// Module ID: 4609
// Function ID: 4610
// Name: Type
// Dependencies: [4610]

// Module 4609 (Type)

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
