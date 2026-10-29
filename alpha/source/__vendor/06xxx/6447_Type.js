// Module ID: 6447
// Function ID: 6448
// Name: Type
// Dependencies: [6448]

// Module 6447 (Type)
import Type2 from "Type" /* 6448 */;


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
