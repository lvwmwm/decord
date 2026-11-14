// Module ID: 1780
// Function ID: 1781
// Dependencies: [32, 717, 1761, 1668, 1781]
// Exports: createEmptyTransitionConfig, parseTransitionShorthand

// Module 1780
import _mod1761 from "module_1761" /* 1761 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 717 */;


export function createEmptyTransitionConfig() {
  return { transitionProperty: [], transitionDuration: [], transitionTimingFunction: [], transitionDelay: [], transitionBehavior: [] };
}
export function parseTransitionShorthand(transition) {
  let obj = _mod1761;
  let splitByCommaResult = obj.splitByComma(transition);
  return splitByCommaResult.reduce(function(transitionProperty, item) {
    let str2;
    let tmp2 = str2;
    let tmp3 = closure_1;
    let obj = str2(closure_1[2]);
    const result = obj.parseSingleTransitionShorthand(item);
    transitionProperty = transitionProperty.transitionProperty;
    const push = transitionProperty.push;
    let tmp5 = str2(closure_1[3]);
    let str = result.transitionProperty;
    const camelizeKebabCase = tmp5.camelizeKebabCase;
    if (str == null) {
      str = "all";
    }
    let arr = push(camelizeKebabCase(str));
    const transitionDuration = transitionProperty.transitionDuration;
    transitionDuration.push(result.transitionDuration);
    const prop = transitionProperty.transitionTimingFunction;
    let tmp8;
    const push2 = prop.push;
    if (result.transitionTimingFunction) {
      str2 = result.transitionTimingFunction;
      let applyResult = str2;
      const tmp2Result = tmp2(tmp3[2]);
      if (!tmp2Result.isPredefinedTimingFunction(str2)) {
        const obj3 = /^(.+)\((.+)\)$/;
        if (obj3.test(str2)) {
          const tmp14 = closure_2(str2.match(obj3), 3);
          const tmp16 = tmp14[2];
          const tmp2Result7 = tmp2(tmp3[2]);
          const splitByCommaResult = tmp2Result7.splitByComma(tmp16);
          if ("cubic-bezier" === tmp14[1]) {
            let _Number = Number;
            const mapped = splitByCommaResult.map(Number);
            const tmp2Result8 = tmp2(tmp3[2]);
            if (tmp2Result8.isArrayOfLength(mapped, 4)) {
              if (mapped.every((item) => !isNaN(item))) {
                const tmp2Result9 = tmp2(tmp3[4]);
                const cubicBezier = tmp2Result9.cubicBezier;
                let items = [];
                HermesBuiltin.arraySpread(items, mapped, 0);
                applyResult = HermesBuiltin.apply(cubicBezier, items, tmp2Result9);
              }
            }
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            let error = new Error("[Reanimated] Invalid timing function: " + str2);
            throw error;
          } else if ("linear" === tmp14[1]) {
            const mapped1 = splitByCommaResult.map(function(item) {
              const obj = _mod1761;
              const arr = _toArray(obj.splitByWhitespace(item));
              const first = arr[0];
              const substr = arr.slice(1);
              let tmp5 = null;
              const tmp2 = require;
              const tmp3 = dependencyMap;
              if (first) {
                const _isNaN = isNaN;
                const _Number = Number;
                tmp5 = null;
                if (!isNaN(Number(first))) {
                  tmp5 = null;
                  if (substr.every(tmp2(tmp3[3]).isPercentage)) {
                    const _Number2 = Number;
                    const items = [Number(first)];
                    HermesBuiltin.arraySpread(items, substr, 1);
                    tmp5 = items;
                  }
                }
              }
              if (tmp5) {
                return tmp5;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("[Reanimated] Invalid control point: " + item + " in " + str2 + " timing function");
                throw error;
              }
            });
            const tmp2Result10 = tmp2(tmp3[4]);
            const linear = tmp2Result10.linear;
            const items1 = [];
            HermesBuiltin.arraySpread(items1, mapped1, 0);
            applyResult = HermesBuiltin.apply(linear, items1, tmp2Result10);
          } else if ("steps" === tmp14[1]) {
            let _Number2 = Number;
            const NumberResult = Number(splitByCommaResult[0]);
            let _isNaN = isNaN;
            if (!isNaN(NumberResult)) {
              if (NumberResult > 0) {
                if (undefined !== splitByCommaResult[1]) {
                  tmp2(tmp3[2]);
                }
                const tmp2Result12 = tmp2(tmp3[4]);
                applyResult = tmp2Result12.steps(NumberResult, tmp40);
              }
            }
          }
        } else {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let self = this;
          let self2 = this;
          const error1 = new Error("[Reanimated] Unsupported timing function: " + str2);
          throw error1;
        }
      }
      tmp8 = applyResult;
    }
    push2(tmp8);
    const transitionDelay = transitionProperty.transitionDelay;
    transitionDelay.push(result.transitionDelay);
    const transitionBehavior = transitionProperty.transitionBehavior;
    transitionBehavior.push(result.transitionBehavior);
    return transitionProperty;
  }, { transitionProperty: [], transitionDuration: [], transitionTimingFunction: [], transitionDelay: [], transitionBehavior: [] });
}
