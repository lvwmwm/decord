// Module ID: 4393
// Function ID: 4394
// Name: Type
// Dependencies: [4394]

// Module 4393 (Type)
import Type from "Type" /* 4394 */;


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
