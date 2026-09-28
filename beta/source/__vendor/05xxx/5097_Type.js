// Module ID: 5097
// Function ID: 5098
// Name: Type
// Dependencies: [5098]

// Module 5097 (Type)
import _mod5098 from "module_5098" /* 5098 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5098(arg0);
    }
    str = str2;
  }
  return str;
};
