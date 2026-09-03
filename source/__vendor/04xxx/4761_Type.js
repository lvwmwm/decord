// Module ID: 4761
// Function ID: 4762
// Name: Type
// Dependencies: [4762]

// Module 4761 (Type)
import Type from "Type" /* 4762 */;


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
