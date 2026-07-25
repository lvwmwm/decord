// Module ID: 4444
// Function ID: 38954
// Name: Type
// Dependencies: [4376]

// Module 4444 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if ("symbol" !== typeof arg0) {
    let str2 = "BigInt";
    if ("bigint" !== tmp) {
      str2 = require(4376) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
