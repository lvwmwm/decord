// Module ID: 1020
// Function ID: 11065
// Name: initMetric
// Dependencies: []

// Module 1020 (initMetric)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.initMetric = function initMetric(CLS, arg1) {
  let num = -1;
  if (arguments.length > 1) {
    num = -1;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let obj = arg1(arg6[0]);
  const navigationEntry = obj.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = arg1(arg6[1]).WINDOW.document;
    if (null == _document) {
      let str3 = "prerender";
      if (obj2.getActivationStart() <= 0) {
        const _document2 = arg1(arg6[1]).WINDOW.document;
        if (null == _document2) {
          if (navigationEntry.type) {
            str = navigationEntry.type.replace(/_/g, "-");
            const str5 = navigationEntry.type;
          }
          let str4 = str;
        } else {
          str4 = "restore";
        }
        str3 = str4;
      }
      const obj2 = arg1(arg6[2]);
    } else {
      str3 = "prerender";
    }
    str2 = str3;
  }
  obj = { name: CLS, value: num, rating: "good", delta: 0, entries: [], id: arg1(arg6[3]).generateUniqueID(), navigationType: str2 };
  return obj;
};
