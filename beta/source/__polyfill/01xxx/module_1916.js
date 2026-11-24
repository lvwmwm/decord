// Module ID: 1916
// Function ID: 1917
// Dependencies: [1759, 1880]
// Exports: create

// Module 1916
import _mod1759 from "module_1759" /* 1759 */;


export const create = (obj) => {
  for (const key10004 in obj) {
    let tmp2 = key10004;
    let tmp3 = obj[key10004];
    if (!tmp3.animationName) {
      continue;
    } else {
      let animationName = tmp3.animationName;
      let mapped;
      if (typeof animationName === "object") {
        let _Array = Array;
        let arr2 = animationName;
        if (!Array.isArray(animationName)) {
          let items = [animationName];
          arr2 = items;
        }
        mapped = arr2.map(function(item) {
          let cSSKeyframesRuleImpl = item;
          const obj = _mod1759;
          const tmp = require;
          const tmp2 = dependencyMap;
          if (!obj.isCSSKeyframesRule(item)) {
            const self = this;
            const self2 = this;
            cSSKeyframesRuleImpl = new tmp(tmp2[1]).CSSKeyframesRuleImpl(item);
          }
          return cSSKeyframesRuleImpl;
        });
      }
      tmp3.animationName = mapped;
      continue;
    }
    continue;
  }
  return obj;
};
