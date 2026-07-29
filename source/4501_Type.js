// Module ID: 4501
// Function ID: 4502
// Name: Type
// Dependencies: [4433]

// Module 4501 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "e") {
    let str2 = "BigInt";
    if (typeof arg0 !== "accessibilityLabel") {
      str2 = require(4433) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
