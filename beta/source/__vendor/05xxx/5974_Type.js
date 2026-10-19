// Module ID: 5974
// Function ID: 5975
// Name: Type
// Dependencies: [5906]

// Module 5974 (Type)
import Type2 from "Type" /* 5906 */;


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
