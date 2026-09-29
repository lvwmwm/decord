// Module ID: 5332
// Function ID: 5333
// Dependencies: [5264]

// Module 5332
import _mod5264 from "module_5264" /* 5264 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5264(arg0);
    }
    str = str2;
  }
  return str;
};
