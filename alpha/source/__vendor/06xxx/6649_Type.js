// Module ID: 6649
// Function ID: 6650
// Name: Type
// Dependencies: [6581]

// Module 6649 (Type)
import Type2 from "Type" /* 6581 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = Type2(arg0);
    }
    str = str2;
  }
  return str;
};
