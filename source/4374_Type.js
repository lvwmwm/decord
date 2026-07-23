// Module ID: 4374
// Function ID: 38797
// Name: Type
// Dependencies: [4375]

// Module 4374 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if ("symbol" !== typeof arg0) {
    let str2 = "BigInt";
    if ("bigint" !== tmp) {
      str2 = require(4375) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
