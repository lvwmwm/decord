// Module ID: 4837
// Function ID: 4838
// Name: Type
// Dependencies: [4769]

// Module 4837 (Type)
import Type from "Type" /* 4769 */;


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
