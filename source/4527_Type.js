// Module ID: 4527
// Function ID: 4528
// Name: Type
// Dependencies: [4528]

// Module 4527 (Type)

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
