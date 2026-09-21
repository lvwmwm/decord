// Module ID: 5002
// Function ID: 5003
// Name: Type
// Dependencies: [5003]

// Module 5002 (Type)
import _mod5003 from "module_5003" /* 5003 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5003(arg0);
    }
    str = str2;
  }
  return str;
};
