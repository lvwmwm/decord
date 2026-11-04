// Module ID: 6420
// Function ID: 6421
// Name: Type
// Dependencies: [6421]

// Module 6420 (Type)
import Type2 from "Type" /* 6421 */;


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
