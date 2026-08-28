// Module ID: 4726
// Function ID: 4727
// Name: Type
// Dependencies: [4727]

// Module 4726 (Type)
import Type from "Type" /* 4727 */;


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
