// Module ID: 5004
// Function ID: 5005
// Name: Type
// Dependencies: [5005]

// Module 5004 (Type)
import _mod5005 from "module_5005" /* 5005 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5005(arg0);
    }
    str = str2;
  }
  return str;
};
