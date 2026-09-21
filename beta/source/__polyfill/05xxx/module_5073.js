// Module ID: 5073
// Function ID: 5074
// Dependencies: [5005]

// Module 5073
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
