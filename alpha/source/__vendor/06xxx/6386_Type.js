// Module ID: 6386
// Function ID: 6387
// Name: Type
// Dependencies: [6387]

// Module 6386 (Type)
import Type2 from "Type" /* 6387 */;


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
