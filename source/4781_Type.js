// Module ID: 4781
// Function ID: 4782
// Name: Type
// Dependencies: [4713]

// Module 4781 (Type)
import Type from "Type" /* 4713 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = Type(arg0);
    }
    str = str2;
  }
  return str;
};
