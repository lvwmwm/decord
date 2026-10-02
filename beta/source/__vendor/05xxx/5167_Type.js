// Module ID: 5167
// Function ID: 5168
// Name: Type
// Dependencies: [5099]

// Module 5167 (Type)
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
