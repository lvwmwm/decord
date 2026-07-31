// Module ID: 4436
// Function ID: 4437
// Name: Type
// Dependencies: [4437]

// Module 4436 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "e") {
    let str2 = "BigInt";
    if (typeof arg0 !== "accessibilityLabel") {
      str2 = require(4437) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
