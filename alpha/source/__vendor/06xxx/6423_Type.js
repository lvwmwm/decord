// Module ID: 6423
// Function ID: 6424
// Name: Type
// Dependencies: [6424]

// Module 6423 (Type)
import Type2 from "Type" /* 6424 */;


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
