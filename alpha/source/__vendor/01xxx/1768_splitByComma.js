// Module ID: 1768
// Function ID: 1769
// Name: splitByComma
// Dependencies: [1763, 1667, 1762]
// Exports: normalizeTimeUnit, offsetOf, parseSingleTransitionShorthand

// Module 1768 (splitByComma)
import _mod1667 from "module_1667" /* 1667 */;
import smellsLikeTimingFunction from "smellsLikeTimingFunction" /* 1762 */;
import _mod1763 from "module_1763" /* 1763 */;


export const splitByComma = _mod1667.splitByComma;
export const splitByWhitespace = _mod1667.splitByWhitespace;
export const offsetOf = (arg0) => {
  let num = 0;
  if ("from" !== arg0) {
    let num3 = 1;
    if ("to" !== arg0) {
      let tmp;
      const _isNaN = isNaN;
      if (isNaN(+arg0)) {
        const PERCENTAGE_REGEX = _mod1763.PERCENTAGE_REGEX;
        const _HermesInternal = HermesInternal;
        let result = null;
        if (PERCENTAGE_REGEX.test("" + arg0)) {
          const _parseFloat = parseFloat;
          const _HermesInternal2 = HermesInternal;
          result = parseFloat("" + arg0) / 100;
        }
        tmp = result;
      } else {
        tmp = +arg0;
      }
      num3 = tmp;
    }
    num = num3;
  }
  return num;
};
export function parseSingleTransitionShorthand(item) {
  const obj = {};
  const obj2 = _mod1667;
  const splitByWhitespaceResult = obj2.splitByWhitespace(item);
  const iter = splitByWhitespaceResult[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("all" !== nextResult) {
      if ("normal" !== tmp3) {
        if ("allow-discrete" !== tmp3) {
          let tmp8 = require;
          let obj3 = smellsLikeTimingFunction;
          if (!obj3.isTimeUnit(tmp3)) {
            if (undefined === obj.transitionTimingFunction) {
              let tmp8Result = tmp8(1762);
              if (tmp8Result.smellsLikeTimingFunction(tmp3)) {
                obj.transitionTimingFunction = tmp3;
              }
            }
            if (undefined !== obj.transitionProperty) {
              let tmp17 = globalThis;
              let _Error = Error;
              let _HermesInternal = HermesInternal;
              let str = "[Reanimated] Invalid transition shorthand: ";
              let self = this;
              let self2 = this;
              let error = new Error("[Reanimated] Invalid transition shorthand: " + item);
              throw error;
            } else {
              obj.transitionProperty = tmp3;
            }
          } else {
            let tmp12 = nextResult;
            if (undefined === obj.transitionDuration) {
              obj.transitionDuration = tmp12;
              continue;
            } else if (undefined === obj.transitionDelay) {
              obj.transitionDelay = tmp12;
              continue;
            }
          }
          continue;
        }
      }
      obj.transitionBehavior = tmp3;
    } else {
      obj.transitionProperty = "all";
    }
    continue;
  }
  return obj;
}
export function normalizeTimeUnit(animationDuration) {
  let parsed;
  if (typeof animationDuration === "number") {
    const _Number = Number;
    let tmp5 = null;
    if (Number.isFinite(animationDuration)) {
      tmp5 = animationDuration;
    }
    parsed = tmp5;
  } else {
    const MILLISECONDS_REGEX = _mod1763.MILLISECONDS_REGEX;
    const tmp6 = require;
    if (MILLISECONDS_REGEX.test(animationDuration)) {
      const _parseFloat2 = parseFloat;
      parsed = parseFloat(animationDuration);
    } else {
      const SECONDS_REGEX = tmp6(1763).SECONDS_REGEX;
      parsed = null;
      if (SECONDS_REGEX.test(animationDuration)) {
        const _parseFloat = parseFloat;
        parsed = 1000 * parseFloat(animationDuration);
      }
    }
  }
  return parsed;
}
