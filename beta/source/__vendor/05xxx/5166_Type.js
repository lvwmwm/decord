// Module ID: 5166
// Function ID: 5167
// Name: Type
// Dependencies: [5098]

// Module 5166 (Type)
import Type2 from "Type" /* 5098 */;


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
