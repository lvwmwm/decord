// Module ID: 5714
// Function ID: 5715
// Name: Type
// Dependencies: [5646]

// Module 5714 (Type)
import Type2 from "Type" /* 5646 */;


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
