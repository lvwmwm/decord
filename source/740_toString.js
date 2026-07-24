// Module ID: 740
// Function ID: 8785
// Name: toString
// Dependencies: [579, 591, 741, 576]

// Module 740 (toString)
let prototype;
if (require("module_579")) {
  prototype = require("module_579").prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(arg0) {
  if ("string" === typeof arg0) {
    return arg0;
  } else if (require(591)(arg0)) {
    return "" + tmp7(741)(arg0, baseToString);
  } else if (tmp7(576)(arg0)) {
    let str3 = "";
    if (toString) {
      str3 = toString.call(arg0);
    }
    return str3;
  } else {
    const text = `${arg0}`;
    if ("0" !== `${arg0}`) {
      let str2 = text;
    } else {
      str2 = "-0";
    }
    return str2;
  }
}

export default baseToString;
