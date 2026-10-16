// Module ID: 5868
// Function ID: 5869
// Name: Type
// Dependencies: [5869]

// Module 5868 (Type)
import Type2 from "Type" /* 5869 */;


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
