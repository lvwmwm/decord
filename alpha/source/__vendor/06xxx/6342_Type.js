// Module ID: 6342
// Function ID: 6343
// Name: Type
// Dependencies: [6343]

// Module 6342 (Type)
import Type2 from "Type" /* 6343 */;


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
