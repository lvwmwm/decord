// Module ID: 740
// Function ID: 8783
// Name: toString
// Dependencies: []

// Module 740 (toString)
let prototype;
if (require(dependencyMap[0])) {
  prototype = require(dependencyMap[0]).prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(arg0) {
  if ("string" === typeof arg0) {
    return arg0;
  } else if (require(dependencyMap[1])(arg0)) {
    return "" + tmp7(tmp8[2])(arg0, baseToString);
  } else if (tmp7(tmp8[3])(arg0)) {
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
