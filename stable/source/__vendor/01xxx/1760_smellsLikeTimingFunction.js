// Module ID: 1760
// Function ID: 1761
// Name: smellsLikeTimingFunction
// Dependencies: [1761, 1665]
// Exports: isArrayOfLength, isCSSCallbackProp, isCSSConfigProp, isCSSKeyframesObject, isCSSKeyframesRule, isLength, isPseudoSelectorValue, isStepsModifier, isTimeUnit, smellsLikeTimingFunction

// Module 1760 (smellsLikeTimingFunction)
import _mod1665 from "module_1665" /* 1665 */;
import _mod1761 from "module_1761" /* 1761 */;

function isPredefinedTimingFunction(ease) {
  const VALID_PREDEFINED_TIMING_FUNCTIONS = _mod1761.VALID_PREDEFINED_TIMING_FUNCTIONS;
  return VALID_PREDEFINED_TIMING_FUNCTIONS.includes(ease);
}
function isAnimationProp(keys) {
  if ("animationName" !== keys) {
    if ("animationDuration" !== keys) {
      if ("animationTimingFunction" !== keys) {
        if ("animationDelay" !== keys) {
          if ("animationIterationCount" !== keys) {
            if ("animationDirection" !== keys) {
              if ("animationFillMode" !== keys) {
                if ("animationPlayState" !== keys) {
                  return false;
                }
              }
            }
          }
        }
      }
    }
  }
  return true;
}
function isTransitionProp(keys) {
  if ("transitionProperty" !== keys) {
    if ("transitionDuration" !== keys) {
      if ("transitionTimingFunction" !== keys) {
        if ("transitionDelay" !== keys) {
          if ("transitionBehavior" !== keys) {
            if ("transition" !== keys) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}
const items = ["onCSSAnimationStart", "onCSSAnimationEnd", "onCSSAnimationIteration", "onCSSAnimationCancel"];
const items1 = ["onCSSTransitionRun", "onCSSTransitionStart", "onCSSTransitionEnd", "onCSSTransitionCancel"];
const items2 = [...items1];
const set = new Set(items2);

export { isPredefinedTimingFunction };
export const smellsLikeTimingFunction = (arg0) => {
  if (typeof isPredefinedTimingFunction === "function") {
    const VALID_PREDEFINED_TIMING_FUNCTIONS = _mod1761.VALID_PREDEFINED_TIMING_FUNCTIONS;
    let hasItem = VALID_PREDEFINED_TIMING_FUNCTIONS.includes(arg0);
    const tmp2 = require;
    if (!hasItem) {
      const VALID_PARAMETRIZED_TIMING_FUNCTIONS = tmp2(1761).VALID_PARAMETRIZED_TIMING_FUNCTIONS;
      const includes = VALID_PARAMETRIZED_TIMING_FUNCTIONS.includes;
      const str2 = arg0.split("(")[0];
      hasItem = includes(str2.trim());
    }
    return hasItem;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { isAnimationProp };
export { isTransitionProp };
export const ANIMATION_CALLBACK_PROPS = items;
export const TRANSITION_CALLBACK_PROPS = items1;
export const isStepsModifier = (arg0) => {
  if ("jump-start" !== arg0) {
    if ("start" !== arg0) {
      if ("jump-end" !== arg0) {
        if ("end" !== arg0) {
          if ("jump-none" !== arg0) {
            if ("jump-both" !== arg0) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
};
export const isCSSConfigProp = (arg0) => {
  if (typeof isTransitionProp === "function") {
    let flag = true;
    if ("transitionProperty" !== arg0) {
      flag = true;
      if ("transitionDuration" !== arg0) {
        flag = true;
        if ("transitionTimingFunction" !== arg0) {
          flag = true;
          if ("transitionDelay" !== arg0) {
            flag = true;
            if ("transitionBehavior" !== arg0) {
              flag = true;
              if ("transition" !== arg0) {
                flag = false;
              }
            }
          }
        }
      }
    }
    if (!flag) {
      if (typeof isAnimationProp === "function") {
        let flag2 = true;
        if ("animationName" !== arg0) {
          flag2 = true;
          if ("animationDuration" !== arg0) {
            flag2 = true;
            if ("animationTimingFunction" !== arg0) {
              flag2 = true;
              if ("animationDelay" !== arg0) {
                flag2 = true;
                if ("animationIterationCount" !== arg0) {
                  flag2 = true;
                  if ("animationDirection" !== arg0) {
                    flag2 = true;
                    if ("animationFillMode" !== arg0) {
                      flag2 = true;
                      if ("animationPlayState" !== arg0) {
                        flag2 = false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        flag = flag2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return flag;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const isCSSCallbackProp = (arg0) => set.has(arg0);
export const isTimeUnit = (str) => {
  let tmp = typeof str === "string";
  if (typeof str === "string") {
    const obj = /^-?(\d+)?(\.\d+)?(ms|s)$/;
    const isMatch = obj.test(str) || "0" === str;
    tmp = isMatch;
  }
  return tmp;
};
export const isLength = (arg0) => {
  const obj = _mod1665;
  let isNumberResult = obj.isNumber(arg0);
  if (!isNumberResult) {
    const tmpResult = _mod1665;
    isNumberResult = tmpResult.isPercentage(arg0);
  }
  return isNumberResult;
};
export const isArrayOfLength = (arg0, arg1) => {
  const isArray = Array.isArray(arg0) && arg0.length === arg1;
  return isArray;
};
export const isCSSKeyframesObject = (obj) => {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    const _Object = Object;
    tmp = Object.keys(obj).length > 0;
  }
  return tmp;
};
export const isCSSKeyframesRule = (obj) => {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = "cssRules" in obj;
  }
  if (tmp) {
    tmp = "cssText" in obj;
  }
  return tmp;
};
export const isPseudoSelectorValue = (obj) => {
  const tmp = obj;
  if (tmp) {
    if (typeof obj === "object") {
      const _Array = Array;
      if (!Array.isArray(obj)) {
        const _Object = Object;
        const keys = Object.keys(obj);
        const everyResult = 0 !== keys.length && keys.every((item) => {
          const startsWithResult = "default" === item || item.startsWith(":");
          return startsWithResult;
        });
        return everyResult;
      }
    }
  }
  return false;
};
