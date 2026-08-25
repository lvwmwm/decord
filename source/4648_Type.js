// Module ID: 4648
// Function ID: 4649
// Name: Type
// Dependencies: [4649]

// Module 4648 (Type)
import Type from "Type" /* 4649 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = Type(arg0);
    }
    str = str2;
  }
  return str;
};
