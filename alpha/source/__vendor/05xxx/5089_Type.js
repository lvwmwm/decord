// Module ID: 5089
// Function ID: 5090
// Name: Type
// Dependencies: [5090]

// Module 5089 (Type)
import _mod5090 from "module_5090" /* 5090 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5090(arg0);
    }
    str = str2;
  }
  return str;
};
