// Module ID: 5867
// Function ID: 5868
// Name: Type
// Dependencies: [5868]

// Module 5867 (Type)
import Type2 from "Type" /* 5868 */;


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
