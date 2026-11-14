// Module ID: 1779
// Function ID: 1780
// Dependencies: [32, 1780, 1668, 1773, 1785]
// Exports: normalizeCSSTransitionProperties

// Module 1779
import _mod1668 from "module_1668" /* 1668 */;
import normalizeDelay from "normalizeDelay" /* 1773 */;
import _mod1780 from "module_1780" /* 1780 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let obj, set;

const ERROR_MESSAGES = {
  invalidTransitionProperty(transitionProperty1) {
    return "Invalid transition property \"" + JSON.stringify(transitionProperty1) + "\"";
  }
};

export { ERROR_MESSAGES };
export function normalizeCSSTransitionProperties(prevTransitionProperties) {
  let settings;
  let someResult;
  let transitionBehavior;
  let transitionDelay;
  let transitionDuration;
  let transitionProperty;
  let transitionTimingFunction;
  function getExpandedConfigProperties(transition) {
    let result;
    let tmp7;
    let tmp8;
    transition = transition.transition;
    obj = _mod1780;
    if (transition) {
      result = obj.parseTransitionShorthand(transition.transition);
    } else {
      result = obj.createEmptyTransitionConfig();
    }
    const entries = Object.entries(transition);
    const tmp3 = entries[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      [tmp7, tmp8] = tmp6;
      let obj2 = _mod1668;
      result[tmp7] = obj2.convertPropertyToArray(tmp8);
      continue;
    }
    return result;
  }
  const tmp = getExpandedConfigProperties(prevTransitionProperties);
  const transitionProperty1 = tmp.transitionProperty;
  let closure_0;
  if (transitionProperty1.length) {
    let tmp5 = "none" === transitionProperty1[0];
    closure_0 = tmp5;
    if (transitionProperty1.some((item) => "none" === item !== closure_0)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self5 = this;
      const self6 = this;
      const error = new Error("[Reanimated] " + settings.invalidTransitionProperty(transitionProperty1));
      throw error;
    } else {
      someResult = !tmp5;
    }
  } else {
    let tmp3 = globalThis;
    const _Object = Object;
    const values = Object.values(tmp2);
    someResult = values.some((item) => item.length);
  }
  if (someResult) {
    let tmp20;
    ({ transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay, transitionBehavior } = tmp);
    let tmp6 = globalThis;
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    const set1 = new Set();
    const tmp7 = set1;
    if (!transitionProperty.length) {
      transitionProperty.push("all");
    }
    settings = {};
    let tmp9 = set;
    let diff = transitionProperty.length - 1;
    let flag = false;
    if (0 <= diff) {
      while (true) {
        let tmp11 = transitionProperty[diff];
        if (!set1.has(tmp11)) {
          let addResult = set1.add(tmp11);
          let tmp14 = require;
          let obj5 = normalizeDelay;
          let normalizeDurationResult = obj5.normalizeDuration(transitionDuration[diff % transitionDuration.length]);
          let obj6 = normalizeDelay;
          let normalizeDelayResult = obj6.normalizeDelay(transitionDelay[diff % transitionDelay.length]);
          if (normalizeDurationResult + normalizeDelayResult > 0) {
            let tmp14Result = tmp14(1773);
            let result = tmp14Result.normalizeTimingFunction(transitionTimingFunction[diff % transitionTimingFunction.length]);
            let tmp14Result2 = tmp14(1785);
            let obj2 = { duration: normalizeDurationResult, timingFunction: result, delay: normalizeDelayResult, allowDiscrete: tmp14Result2.normalizeTransitionBehavior(transitionBehavior[diff % transitionBehavior.length]) };
            settings[tmp11] = obj2;
            flag = true;
            if ("all" === tmp11) {
              break;
            } else {
              let addResult1 = set.add(tmp11);
            }
          }
          break;
        }
        diff = diff - 1;
        flag = false;
        if (0 > diff) {
          break;
        }
      }
    }
    if (flag) {
      tmp20 = { specificProperties: "Array", settings };
      const obj3 = { specificProperties: "Array", settings };
    } else {
      tmp20 = null;
      if (set.size) {
        tmp20 = { specificProperties: set, settings };
        const obj4 = { specificProperties: set, settings };
      }
    }
    return tmp20;
  } else {
    return null;
  }
}
