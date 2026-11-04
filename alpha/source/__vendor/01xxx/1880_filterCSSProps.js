// Module ID: 1880
// Function ID: 1881
// Name: filterCSSProps
// Dependencies: [1760]
// Exports: filterCSSProps

// Module 1880 (filterCSSProps)
import smellsLikeTimingFunction from "smellsLikeTimingFunction" /* 1760 */;


export function filterCSSProps(props) {
  const f83012 = (arr) => {
    let mapped;
    if (Array.isArray(arr)) {
      mapped = arr.map(f83012);
    } else {
      mapped = arr;
      if (mapped) {
        mapped = arr;
        if (typeof arr === "object") {
          const obj = {};
          mapped = obj;
          const keys = Object.keys();
          if (keys !== undefined) {
            mapped = obj;
            while (keys[tmp] !== undefined) {
              let tmp8 = require;
              let tmp9 = dependencyMap;
              let obj3 = smellsLikeTimingFunction;
              if (obj3.isCSSConfigProp(tmp3)) {
                continue;
              } else {
                let tmp4 = arr[tmp3];
                let tmp8Result = tmp8(tmp9[0]);
                if (tmp8Result.isPseudoSelectorValue(tmp4)) {
                  let _default = tmp4.default;
                  if (undefined === _default) {
                    continue;
                  } else {
                    obj[tmp3] = _default;
                    continue;
                  }
                  continue;
                } else {
                  obj[tmp3] = tmp4;
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      }
    }
    return mapped;
  };
  let obj = {};
  for (const key10005 in props) {
    let tmp7 = require;
    let tmp8 = dependencyMap;
    let obj3 = smellsLikeTimingFunction;
    if (obj3.isCSSCallbackProp(key10005)) {
      continue;
    } else {
      obj[key10005] = props[key10005];
      continue;
    }
    continue;
  }
  if ("style" in props) {
    let mapped;
    const style = props.style;
    const _Array = Array;
    if (Array.isArray(style)) {
      mapped = style.map(f83012);
    } else {
      mapped = style;
      if (mapped) {
        mapped = style;
        if (typeof style === "object") {
          const obj2 = {};
          let tmp9 = style;
          mapped = obj2;
          let keys = Object.keys();
          if (keys !== undefined) {
            mapped = obj2;
            let tmp4 = keys[tmp];
            while (tmp4 !== undefined) {
              let tmp12 = require;
              let obj5 = smellsLikeTimingFunction;
              if (obj5.isCSSConfigProp(tmp4)) {
                continue;
              } else {
                let tmp5 = style[tmp4];
                let tmp12Result = tmp12(1760);
                if (tmp12Result.isPseudoSelectorValue(tmp5)) {
                  let _default = tmp5.default;
                  if (undefined === _default) {
                    continue;
                  } else {
                    obj2[tmp4] = _default;
                    continue;
                  }
                  continue;
                } else {
                  obj2[tmp4] = tmp5;
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      }
    }
    obj.style = mapped;
  }
  return obj;
}
