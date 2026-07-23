// Module ID: 527
// Function ID: 6635
// Dependencies: [519, 528]

// Module 527
const tmp = [].__proto__ === Array.prototype;
while (true) {
  let _module = tmp;
  if (!tmp) {
    break;
  } else {
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let num = 0;
    _module = require("module_519");
    break;
  }
  let tmp5 = _module;
  if (_module) {
    let tmp6 = require;
    let tmp7 = dependencyMap;
    let num2 = 0;
    let tmp8 = globalThis;
    let _Object = Object;
    let str = "__proto__";
    tmp5 = require("module_519")(Object.prototype, "__proto__");
  }
  let tmp10 = globalThis;
  let _Object2 = Object;
  let tmp11 = getPrototypeOf;
  if (tmp5) {
    let tmp12 = tmp5;
    let str2 = "function";
    if ("function" === typeof tmp9.get) {
      let tmp14 = dependencyMap;
      let num3 = 1;
      let items = [tmp5.get];
      let getDunder = require("callBindBasic")(items);
    }
    module.exports = getDunder;
  }
  let str3 = "function";
  let tmp13 = "function" === typeof getPrototypeOf;
  getDunder = tmp13;
  if (tmp13) {
    getDunder = function getDunder(arg0) {
      let tmp2 = arg0;
      if (null != arg0) {
        tmp2 = Object(arg0);
      }
      return getPrototypeOf(tmp2);
    };
  }
}
