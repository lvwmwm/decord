// Module ID: 1769
// Function ID: 1770
// Name: splitByComma
// Dependencies: [1764, 1668, 1763]
// Exports: normalizeTimeUnit, offsetOf, parseSingleTransitionShorthand

// Module 1769 (splitByComma)
import _mod1668 from "module_1668" /* 1668 */;
import smellsLikeTimingFunction from "smellsLikeTimingFunction" /* 1763 */;
import _mod1764 from "module_1764" /* 1764 */;


export const splitByComma = _mod1668.splitByComma;
export const splitByWhitespace = _mod1668.splitByWhitespace;
export const offsetOf = (arg0) => {
  let num = 0;
  if ("from" !== arg0) {
    let num3 = 1;
    if ("to" !== arg0) {
      let tmp;
      const _isNaN = isNaN;
      if (isNaN(+arg0)) {
        const PERCENTAGE_REGEX = _mod1764.PERCENTAGE_REGEX;
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
  const obj2 = _mod1668;
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
              let tmp8Result = tmp8(1763);
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
    const MILLISECONDS_REGEX = _mod1764.MILLISECONDS_REGEX;
    const tmp6 = require;
    if (MILLISECONDS_REGEX.test(animationDuration)) {
      const _parseFloat2 = parseFloat;
      parsed = parseFloat(animationDuration);
    } else {
      const SECONDS_REGEX = tmp6(1764).SECONDS_REGEX;
      parsed = null;
      if (SECONDS_REGEX.test(animationDuration)) {
        const _parseFloat = parseFloat;
        parsed = 1000 * parseFloat(animationDuration);
      }
    }
  }
  return parsed;
}
