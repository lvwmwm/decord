// Module ID: 5934
// Function ID: 5935
// Name: Type
// Dependencies: [5866]

// Module 5934 (Type)
import Type2 from "Type" /* 5866 */;


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
