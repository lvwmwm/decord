// Module ID: 5715
// Function ID: 5716
// Name: Type
// Dependencies: [5647]

// Module 5715 (Type)
import Type2 from "Type" /* 5647 */;


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
