// Module ID: 5037
// Function ID: 5038
// Dependencies: [5038]

// Module 5037
import _mod5038 from "module_5038" /* 5038 */;


export default function Type(num) {
  let str = "Null";
  if (null !== num) {
    let str2 = "Undefined";
    if (undefined !== num) {
      let str3 = "Object";
      if (!_mod5038(num)) {
        let str4 = "Number";
        if (typeof num !== "number") {
          let str5 = "Boolean";
          if (typeof num !== "boolean") {
            let str6;
            if (typeof num === "string") {
              str6 = "String";
            }
            str5 = str6;
          }
          str4 = str5;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
