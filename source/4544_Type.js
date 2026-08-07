// Module ID: 4544
// Function ID: 4545
// Name: Type
// Dependencies: [4545]

// Module 4544 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4545) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
