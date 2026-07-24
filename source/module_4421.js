// Module ID: 4421
// Function ID: 38896
// Dependencies: [519, 528, 518]

// Module 4421
const obj = { __proto__: null };
while (true) {
  let tmp = obj;
  let str = "toString";
  let tmp2 = !("toString" in obj);
  let tmp3 = require;
  let tmp4 = dependencyMap;
  let num = 0;
  let _module = require("module_519");
  let tmp6 = _module;
  if (!_module) {
    break;
  } else {
    let tmp7 = require;
    let tmp8 = dependencyMap;
    let tmp9 = globalThis;
    let _Object = Object;
    let str2 = "__proto__";
    tmp6 = require("module_519")(Object.prototype, "__proto__");
    break;
  }
  let tmp10 = tmp6;
  let tmp11 = module;
  let tmp12 = tmp2;
  if (tmp2) {
    let tmp13 = tmp6;
    let tmp14 = !tmp10;
    let tmp15 = !tmp14;
    if (!tmp14) {
      let tmp16 = tmp6;
      let str3 = "function";
      tmp15 = "function" === typeof tmp10.set;
    }
    let tmp17 = tmp15;
    if (tmp15) {
      let tmp18 = dependencyMap;
      let num2 = 1;
      let items = [tmp6.set];
      tmp17 = require("callBindBasic")(items);
    }
    let setDunder = tmp17;
    if (!tmp17) {
      setDunder = function setDunder(arg0, arg1) {
        if (null == arg0) {
          let tmp3 = require(518);
          const prototype = tmp3.prototype;
          tmp3 = new tmp3("set Object.prototype.__proto__ called on null or undefined");
          throw tmp3;
        } else {
          arg0.__proto__ = arg1;
          return arg1;
        }
      };
    }
    tmp12 = setDunder;
  }
  module.exports = tmp12;
}
