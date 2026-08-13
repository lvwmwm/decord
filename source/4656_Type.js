// Module ID: 4656
// Function ID: 4657
// Name: Type
// Dependencies: [4588]

// Module 4656 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = require(4588) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
