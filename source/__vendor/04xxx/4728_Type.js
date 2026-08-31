// Module ID: 4728
// Function ID: 4729
// Name: Type
// Dependencies: [4729]

// Module 4728 (Type)
import Type from "Type" /* 4729 */;


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
