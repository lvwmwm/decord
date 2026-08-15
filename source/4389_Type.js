// Module ID: 4389
// Function ID: 4390
// Name: Type
// Dependencies: [4390]

// Module 4389 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4390) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
