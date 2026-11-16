// Module ID: 1918
// Function ID: 1919
// Dependencies: [1761, 1882]
// Exports: create

// Module 1918
import _mod1761 from "module_1761" /* 1761 */;


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
          const obj = _mod1761;
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
