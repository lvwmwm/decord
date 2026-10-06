// Module ID: 921
// Function ID: 922
// Dependencies: [920, 916, 919, 922]
// Exports: initMetric

// Module 921
import _mod919 from "module_919" /* 919 */;
import _mod920 from "module_920" /* 920 */;
import generateUniqueID from "generateUniqueID" /* 922 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const initMetric = (name) => {
  let tmpResult2;
  let num = arg1;
  if (arg1 === undefined) {
    num = -1;
  }
  const obj = _mod920;
  const navigationEntry = obj.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = tmp(916).WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    let str4 = "prerender";
    if (!prerendering) {
      str4 = "prerender";
      const tmpResult = _mod919;
      if (tmpResult.getActivationStart() <= 0) {
        const _document2 = tmp(916).WINDOW.document;
        let wasDiscarded;
        if (_document2 != null) {
          wasDiscarded = _document2.wasDiscarded;
        }
        let str5 = "restore";
        if (!wasDiscarded) {
          if (navigationEntry.type) {
            const str6 = navigationEntry.type;
            str = str6.replace(/_/g, "-");
          }
          str5 = str;
        }
        str4 = str5;
      }
    }
    str2 = str4;
  }
  const obj2 = { name, value: num, rating: "good", delta: 0, entries: [], id: tmpResult2.generateUniqueID(), navigationType: str2 };
  tmpResult2 = generateUniqueID;
  return obj2;
};
