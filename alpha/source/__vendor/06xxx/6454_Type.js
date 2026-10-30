// Module ID: 6454
// Function ID: 6455
// Name: Type
// Dependencies: [6455]

// Module 6454 (Type)
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
