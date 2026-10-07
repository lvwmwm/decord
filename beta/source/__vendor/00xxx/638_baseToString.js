// Module ID: 638
// Function ID: 639
// Name: baseToString
// Dependencies: [523, 514, 639, 553]

// Module 638 (baseToString)
import _mod514 from "module_514" /* 514 */;
import _mod523 from "module_523" /* 523 */;
import isSymbol from "isSymbol" /* 553 */;
import arrayMap from "arrayMap" /* 639 */;

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
}
let toString;
if (prototype) {
  toString = prototype.toString;
}
function baseToString(str) {
  if (typeof str === "string") {
    return str;
  } else if (_mod514(str)) {
    return "" + arrayMap(str, baseToString);
  } else if (isSymbol(str)) {
    let str3 = "";
    if (toString) {
      str3 = obj.call(str);
    }
    return str3;
  } else {
    let str2;
    const text = `${str}`;
    if ("0" !== `${str}`) {
      str2 = text;
    } else {
      str2 = "-0";
    }
    return str2;
  }
}

export default baseToString;
