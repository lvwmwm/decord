// Module ID: 1915
// Function ID: 1916
// Dependencies: [1758, 1879]
// Exports: create

// Module 1915
import _mod1758 from "module_1758" /* 1758 */;


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
          const obj = _mod1758;
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
