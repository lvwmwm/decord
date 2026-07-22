// Module ID: 4371
// Function ID: 38767
// Name: Type
// Dependencies: []

// Module 4371 (Type)

export default function Type(arg0) {
  let str = "Null";
  if (null !== arg0) {
    let str2 = "Undefined";
    if (undefined !== arg0) {
      let str3 = "Object";
      if (!require(dependencyMap[0])(arg0)) {
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
