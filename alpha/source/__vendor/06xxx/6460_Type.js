// Module ID: 6460
// Function ID: 6461
// Name: Type
// Dependencies: [6461]

// Module 6460 (Type)
import Type2 from "Type" /* 6461 */;


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
