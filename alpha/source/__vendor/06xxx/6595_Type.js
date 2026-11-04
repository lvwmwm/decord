// Module ID: 6595
// Function ID: 6596
// Name: Type
// Dependencies: [6596]

// Module 6595 (Type)
import Type2 from "Type" /* 6596 */;


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
