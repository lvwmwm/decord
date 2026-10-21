// Module ID: 6367
// Function ID: 6368
// Name: Type
// Dependencies: [6368]

// Module 6367 (Type)
import Type2 from "Type" /* 6368 */;


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
