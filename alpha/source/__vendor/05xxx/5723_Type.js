// Module ID: 5723
// Function ID: 5724
// Name: Type
// Dependencies: [5655]

// Module 5723 (Type)
import Type2 from "Type" /* 5655 */;


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
