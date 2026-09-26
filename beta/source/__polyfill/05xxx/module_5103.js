// Module ID: 5103
// Function ID: 5104
// Dependencies: [5035]

// Module 5103
import _mod5035 from "module_5035" /* 5035 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod5035(arg0);
    }
    str = str2;
  }
  return str;
};
