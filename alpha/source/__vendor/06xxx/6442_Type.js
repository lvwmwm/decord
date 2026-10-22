// Module ID: 6442
// Function ID: 6443
// Name: Type
// Dependencies: [6374]

// Module 6442 (Type)
import Type2 from "Type" /* 6374 */;


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
