// Module ID: 4655
// Function ID: 4656
// Name: Type
// Dependencies: [4587]

// Module 4655 (Type)

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
