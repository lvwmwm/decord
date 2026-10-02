// Module ID: 5098
// Function ID: 5099
// Name: Type
// Dependencies: [5099]

// Module 5098 (Type)
import Type2 from "Type" /* 5099 */;


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
