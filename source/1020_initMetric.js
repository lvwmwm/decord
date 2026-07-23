// Module ID: 1020
// Function ID: 11066
// Name: initMetric
// Dependencies: [1019, 1015, 1018, 1021]

// Module 1020 (initMetric)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.initMetric = function initMetric(CLS, arg1) {
  let num = -1;
  if (arguments.length > 1) {
    num = -1;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let obj = require(1019) /* getNavigationEntry */;
  const navigationEntry = obj.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = require(1015) /* WINDOW */.WINDOW.document;
    if (null == _document) {
      let str3 = "prerender";
      if (obj2.getActivationStart() <= 0) {
        const _document2 = require(1015) /* WINDOW */.WINDOW.document;
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
      obj2 = require(1018) /* getActivationStart */;
    } else {
      str3 = "prerender";
    }
    str2 = str3;
  }
  obj = { name: CLS, value: num, rating: "good", delta: 0, entries: [], id: require(1021) /* generateUniqueID */.generateUniqueID(), navigationType: str2 };
  return obj;
};
