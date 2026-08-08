// Module ID: 4615
// Function ID: 4616
// Name: Type
// Dependencies: [4547]

// Module 4615 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4547) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
