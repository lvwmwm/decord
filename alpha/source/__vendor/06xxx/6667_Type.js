// Module ID: 6667
// Function ID: 6668
// Name: Type
// Dependencies: [6599]

// Module 6667 (Type)
import Type2 from "Type" /* 6599 */;


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
