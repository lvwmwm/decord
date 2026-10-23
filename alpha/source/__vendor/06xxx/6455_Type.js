// Module ID: 6455
// Function ID: 6456
// Name: Type
// Dependencies: [6387]

// Module 6455 (Type)
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
