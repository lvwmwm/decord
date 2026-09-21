// Module ID: 913
// Function ID: 914
// Dependencies: [912, 908, 911, 914]
// Exports: initMetric

// Module 913
import _mod912 from "module_912" /* 912 */;
import generateUniqueID from "generateUniqueID" /* 914 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const initMetric = (name) => {
  let num = arg1;
  if (arg1 === undefined) {
    num = -1;
  }
  const navigationEntry = _mod912.getNavigationEntry();
  let str = "navigate";
  let str2 = "navigate";
  if (navigationEntry) {
    const _document = tmp(908).WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    let str4 = "prerender";
    if (!prerendering) {
      str4 = "prerender";
      if (tmpResult.getActivationStart() <= 0) {
        const _document2 = tmp(908).WINDOW.document;
        let wasDiscarded;
        if (_document2 != null) {
          wasDiscarded = _document2.wasDiscarded;
        }
        let str5 = "restore";
        if (!wasDiscarded) {
          if (navigationEntry.type) {
            str = navigationEntry.type.replace(/_/g, "-");
          }
          str5 = str;
        }
        str4 = str5;
      }
      tmpResult = tmp(911);
    }
    str2 = str4;
  }
  const obj2 = { name, value: num, rating: "good", delta: 0, entries: [], id: null, navigationType: null };
  obj2.id = generateUniqueID.generateUniqueID();
  obj2.navigationType = str2;
  return obj2;
};
