// Module ID: 6458
// Function ID: 6459
// Name: Type
// Dependencies: [6390]

// Module 6458 (Type)
import Type2 from "Type" /* 6390 */;


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
