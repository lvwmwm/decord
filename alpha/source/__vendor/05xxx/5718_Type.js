// Module ID: 5718
// Function ID: 5719
// Name: Type
// Dependencies: [5650]

// Module 5718 (Type)
import Type2 from "Type" /* 5650 */;


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
