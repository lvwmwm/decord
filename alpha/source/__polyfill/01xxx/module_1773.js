// Module ID: 1773
// Function ID: 1774
// Dependencies: [1763, 1760]
// Exports: normalizeDelay, normalizeDuration, normalizeTimingFunction

// Module 1773
import _mod1760 from "module_1760" /* 1760 */;
import _mod1763 from "module_1763" /* 1763 */;

const ERROR_MESSAGES = {
  invalidDelay(animationDelay) {
    return "Invalid delay \"" + animationDelay + "\". Expected a number, \"ms\", or \"s\".";
  },
  invalidDuration(animationDuration) {
    return "Invalid duration \"" + animationDuration + "\". Expected a number, \"ms\", or \"s\".";
  },
  negativeDuration(animationDuration) {
    return "Duration cannot be negative, received \"" + animationDuration + "\".";
  },
  invalidPredefinedTimingFunction(ease) {
    const VALID_PREDEFINED_TIMING_FUNCTIONS = _mod1763.VALID_PREDEFINED_TIMING_FUNCTIONS;
    return "Invalid predefined timing function \"" + ease + "\". Supported values are: " + VALID_PREDEFINED_TIMING_FUNCTIONS.join(", ") + ".";
  },
  invalidParametrizedTimingFunction(ease) {
    let str;
    if (ease != null) {
      str = ease.toString();
    }
    return "Invalid parametrized timing function \"" + str + "\".";
  }
};

export { ERROR_MESSAGES };
export function normalizeDelay(animationDelay) {
  let num = animationDelay;
  if (animationDelay === undefined) {
    num = 0;
  }
  const obj = _mod1760;
  const normalizeTimeUnitResult = obj.normalizeTimeUnit(num);
  if (null === normalizeTimeUnitResult) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] " + obj.invalidDelay(num));
    throw error;
  } else {
    return normalizeTimeUnitResult;
  }
}
export function normalizeDuration(animationDuration) {
  let num = animationDuration;
  if (animationDuration === undefined) {
    num = 0;
  }
  const obj = _mod1760;
  const normalizeTimeUnitResult = obj.normalizeTimeUnit(num);
  if (null === normalizeTimeUnitResult) {
    const _Error2 = Error;
    const _HermesInternal2 = HermesInternal;
    const self3 = this;
    const self4 = this;
    const error = new Error("[Reanimated] " + obj.invalidDuration(num));
    throw error;
  } else if (normalizeTimeUnitResult < 0) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error1 = new Error("[Reanimated] " + obj.negativeDuration(num));
    throw error1;
  } else {
    return normalizeTimeUnitResult;
  }
}
export function normalizeTimingFunction(animationTimingFunction) {
  let obj;
  let str = animationTimingFunction;
  if (animationTimingFunction === undefined) {
    str = "ease";
  }
  if (typeof str === "string") {
    obj = _mod1760;
    if (obj.isPredefinedTimingFunction(str)) {
      return str;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error = new Error("[Reanimated] " + obj.invalidPredefinedTimingFunction(str));
      throw error;
    }
  } else {
    if (str.normalize) {
      if (typeof str.normalize === "function") {
        return str.normalize();
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error1 = new Error("[Reanimated] " + obj.invalidParametrizedTimingFunction(str));
    throw error1;
  }
}
