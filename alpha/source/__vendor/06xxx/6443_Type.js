// Module ID: 6443
// Function ID: 6444
// Name: Type
// Dependencies: [6375]

// Module 6443 (Type)
import Type2 from "Type" /* 6375 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = Type2(arg0);
    }
    str = str2;
  }
  return str;
};
