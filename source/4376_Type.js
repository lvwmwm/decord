// Module ID: 4376
// Function ID: 38812
// Name: Type
// Dependencies: [4377]

// Module 4376 (Type)

export default function Type(arg0) {
  let str = "Null";
  if (null !== arg0) {
    let str2 = "Undefined";
    if (undefined !== arg0) {
      let str3 = "Object";
      if (!require(4377) /* isObject */(arg0)) {
        let str4 = "Number";
        if ("number" !== typeof arg0) {
          let str6 = "Boolean";
          if ("boolean" !== tmp3) {
            let str9;
            if ("string" === tmp3) {
              str9 = "String";
            }
            str6 = str9;
          }
          str4 = str6;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
