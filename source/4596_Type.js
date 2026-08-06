// Module ID: 4596
// Function ID: 4597
// Name: Type
// Dependencies: [4528]

// Module 4596 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4528) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
