// Module ID: 4807
// Function ID: 4808
// Name: Type
// Dependencies: [4808]

// Module 4807 (Type)
import Type from "Type" /* 4808 */;


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
