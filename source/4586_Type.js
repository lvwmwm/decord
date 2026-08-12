// Module ID: 4586
// Function ID: 4587
// Name: Type
// Dependencies: [4587]

// Module 4586 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4587) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
