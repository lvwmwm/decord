// Module ID: 6523
// Function ID: 6524
// Name: Type
// Dependencies: [6455]

// Module 6523 (Type)
import Type2 from "Type" /* 6455 */;


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
