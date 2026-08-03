// Module ID: 4498
// Function ID: 4499
// Name: Type
// Dependencies: [4499]

// Module 4498 (Type)

export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "e") {
    let str2 = "BigInt";
    if (typeof arg0 !== "accessibilityLabel") {
      str2 = require(4499) /* Type */(arg0);
    }
    str = str2;
  }
  return str;
};
