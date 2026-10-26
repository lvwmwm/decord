// Module ID: 6457
// Function ID: 6458
// Name: Type
// Dependencies: [6389]

// Module 6457 (Type)
import Type2 from "Type" /* 6389 */;


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
