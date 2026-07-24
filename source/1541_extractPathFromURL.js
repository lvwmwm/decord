// Module ID: 1541
// Function ID: 17555
// Name: extractPathFromURL
// Dependencies: [1501]

// Module 1541 (extractPathFromURL)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function extractPathFromURL(arg0, str) {
  const iter = arg0[Symbol.iterator]();
  str = iter.next();
  while (iter !== undefined) {
    let str7 = str;
    let match = str.match(/^[^:]+:/);
    let first;
    if (null != match) {
      let tmp = match;
      first = tmp21[0];
    }
    let tmp3 = first;
    let str2 = "";
    if (null != first) {
      str2 = first;
    }
    let tmp4 = str;
    let _RegExp = RegExp;
    let tmp5 = module;
    let tmp6 = dependencyMap;
    let _HermesInternal = HermesInternal;
    let tmp7 = new.target;
    let tmp8 = new.target;
    let regExp = new RegExp("^" + module(1501)(str2));
    let tmp10 = regExp;
    let str3 = str7.replace(regExp, "");
    let str4 = str3.replace(/\/+/g, "/");
    let str5 = str4.replace(/^\//, "");
    let _RegExp2 = RegExp;
    let tmp11 = module(1501)(str2);
    let parts = str5.split(".");
    let mapped = parts.map((arg0) => {
      let str = "[^/]+";
      if ("*" !== arg0) {
        str = outer1_0(outer1_1[0])(arg0);
      }
      return str;
    });
    let _HermesInternal2 = HermesInternal;
    let tmp12 = new.target;
    let tmp13 = new.target;
    let regExp1 = new RegExp("^" + tmp11 + "(/)*" + mapped.join("\\."));
    let tmp15 = regExp1;
    let tmp16 = str;
    let tmp14 = regExp1;
    let replaced = str.replace(/\/+/g, "/");
    let str6 = replaced;
    if (regExp1.test(replaced)) {
      let tmp18 = replaced;
      let replaced1 = str6.replace(tmp14, "");
      iter.return();
      return replaced1;
    }
  }
};
