// Module ID: 6414
// Function ID: 6415
// Name: Type
// Dependencies: [6346]

// Module 6414 (Type)
import Type2 from "Type" /* 6346 */;


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
