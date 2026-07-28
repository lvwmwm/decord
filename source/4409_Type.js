// Module ID: 4409
// Function ID: 38924
// Name: Type
// Dependencies: [4410]

// Module 4409 (Type)

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
