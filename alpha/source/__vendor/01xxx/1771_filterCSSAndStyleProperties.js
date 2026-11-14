// Module ID: 1771
// Function ID: 1772
// Name: filterCSSAndStyleProperties
// Dependencies: [1763, 1772, 1668]
// Exports: filterCSSAndStyleProperties, splitCSSCallbacks

// Module 1771 (filterCSSAndStyleProperties)
import smellsLikeTimingFunction from "smellsLikeTimingFunction" /* 1763 */;


export function filterCSSAndStyleProperties(iter) {
  let items1;
  let tmp;
  let tmp2;
  let obj = {};
  let obj2 = {};
  const obj3 = {};
  const obj4 = {};
  let tmp3 = obj2;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp3 = obj2;
    while (keys[tmp2] !== undefined) {
      let tmp25 = iter[tmp6];
      if (undefined === tmp25) {
        continue;
      } else {
        let tmp7 = require;
        let obj5 = smellsLikeTimingFunction;
        if (obj5.isAnimationProp(tmp6)) {
          obj[tmp6] = tmp25;
          obj2 = tmp5;
          continue;
        } else {
          let tmp7Result = tmp7(1763);
          if (tmp7Result.isTransitionProp(tmp6)) {
            if ("transition" === tmp6) {
              let obj6 = { transition: tmp25 };
              obj2 = obj6;
              continue;
            } else {
              tmp5[tmp6] = tmp25;
              obj2 = tmp5;
              continue;
            }
            continue;
          } else {
            let tmp7Result5 = tmp7(1772);
            obj2 = tmp5;
            if (tmp7Result5.isSharedValue(tmp25)) {
              continue;
            } else {
              let tmp7Result6 = tmp7(1763);
              if (tmp7Result6.isPseudoSelectorValue(tmp25)) {
                let _default = tmp25.default;
                if (undefined !== _default) {
                  obj3[tmp6] = _default;
                }
                obj2 = tmp5;
                let keys1 = Object.keys();
                if (keys1 === undefined) {
                  continue;
                } else {
                  obj2 = tmp5;
                  let tmp14 = keys1[tmp];
                  while (tmp14 !== undefined) {
                    if ("default" === tmp14) {
                      continue;
                    } else {
                      let tmp15 = obj4[tmp14];
                      if (tmp15 == null) {
                        let obj7 = { selectorStyle: {}, defaultStyle: {} };
                        obj4[tmp14] = obj7;
                        tmp15 = obj7;
                      }
                      tmp15.selectorStyle[tmp6] = tmp25[tmp14];
                      tmp15.defaultStyle[tmp6] = _default;
                      continue;
                    }
                    continue;
                  }
                }
                continue;
              } else {
                let tmp7Result7 = tmp7(1668);
                if (tmp7Result7.isEmptyObject(tmp25)) {
                  let tmp7Result8 = tmp7(1668);
                  if (tmp7Result8.isSupportedStyleProp(tmp6)) {
                    let tmp9 = globalThis;
                    let _Error = Error;
                    let _HermesInternal = HermesInternal;
                    let str = "\": an empty object is not a valid style value.";
                    let str2 = "[Reanimated] Invalid value for \"";
                    let self = this;
                    let self2 = this;
                    let error = new Error("[Reanimated] Invalid value for \"" + tmp6 + "\": an empty object is not a valid style value.");
                    throw error;
                  }
                }
                obj3[tmp6] = tmp25;
                obj2 = tmp5;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  const animationName = obj.animationName;
  if (animationName) {
    const _Array = Array;
    let tmp17 = animationName;
    if (!Array.isArray(animationName)) {
      const items = [animationName];
      tmp17 = items;
    }
    items1 = tmp17;
  } else {
    items1 = [];
  }
  let tmp18 = null;
  if (items1.length > 0) {
    tmp18 = null;
    if (items1.every((item) => {
      let tmp = "none" !== item;
      if (tmp) {
        const obj = smellsLikeTimingFunction;
        let isCSSKeyframesRuleResult = obj.isCSSKeyframesRule(item);
        const tmp2 = require;
        const tmp3 = dependencyMap;
        if (!isCSSKeyframesRuleResult) {
          const tmp2Result = tmp2(tmp3[0]);
          isCSSKeyframesRuleResult = tmp2Result.isCSSKeyframesObject(item);
        }
        tmp = isCSSKeyframesRuleResult;
      }
      return tmp;
    })) {
      const obj8 = { animationName };
      const merged = Object.assign(obj);
      tmp18 = obj8;
    }
  }
  const items2 = [tmp18, , , ];
  let tmp22 = null;
  if (Object.keys(tmp3).length > 0) {
    tmp22 = tmp3;
  }
  items2[1] = tmp22;
  let tmp23 = null;
  if (Object.keys(obj4).length > 0) {
    tmp23 = obj4;
  }
  items2[2] = tmp23;
  items2[3] = obj3;
  return items2;
}
export function splitCSSCallbacks(arg0) {
  const obj = {};
  const obj2 = {};
  let flag = false;
  let flag2 = false;
  const ANIMATION_CALLBACK_PROPS = smellsLikeTimingFunction.ANIMATION_CALLBACK_PROPS;
  for (const item10018 of ANIMATION_CALLBACK_PROPS) {
    let tmp2 = arg0[item10018];
    if (undefined !== tmp2) {
      obj[tmp] = tmp3;
      flag = true;
    }
    continue;
  }
  const TRANSITION_CALLBACK_PROPS = smellsLikeTimingFunction.TRANSITION_CALLBACK_PROPS;
  for (const item10034 of TRANSITION_CALLBACK_PROPS) {
    let tmp7 = arg0[item10034];
    if (undefined !== tmp7) {
      obj2[tmp6] = tmp8;
      flag2 = true;
    }
    continue;
  }
  let tmp11 = null;
  if (flag) {
    tmp11 = obj;
  }
  const items = [tmp11, ];
  let tmp12 = null;
  if (flag2) {
    tmp12 = obj2;
  }
  items[1] = tmp12;
  return items;
}
