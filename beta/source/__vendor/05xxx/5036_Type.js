// Module ID: 5036
// Function ID: 5037
// Name: Type
// Dependencies: [5037]

// Module 5036 (Type)
import _mod5037 from "module_5037" /* 5037 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5037(arg0);
    }
    str = str2;
  }
  return str;
};
