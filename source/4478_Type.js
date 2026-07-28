// Module ID: 4478
// Function ID: 39069
// Name: Type
// Dependencies: [4410]

// Module 4478 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if ("symbol" !== typeof arg0) {
    let str2 = "BigInt";
    if ("bigint" !== tmp) {
      str2 = require(4410) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
