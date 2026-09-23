// Module ID: 5156
// Function ID: 5157
// Dependencies: [5088]

// Module 5156
import _mod5088 from "module_5088" /* 5088 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5088(arg0);
    }
    str = str2;
  }
  return str;
};
