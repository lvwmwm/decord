// Module ID: 1776
// Function ID: 1777
// Dependencies: [1777, 1668, 1773, 1761]
// Exports: getAnimationSettingsUpdates, normalizeDirection, normalizeFillMode, normalizeIterationCount, normalizePlayState, normalizeSingleCSSAnimationSettings

// Module 1776
import _mod1668 from "module_1668" /* 1668 */;
import _mod1761 from "module_1761" /* 1761 */;
import normalizeDelay from "normalizeDelay" /* 1773 */;
import VALID_ANIMATION_DIRECTIONS2 from "VALID_ANIMATION_DIRECTIONS" /* 1777 */;

const ERROR_MESSAGES = {
  invalidAnimationDirection(animationDirection) {
    return "Invalid animation direction \"" + animationDirection + "\".";
  },
  invalidIterationCount(animationIterationCount) {
    return "Invalid iteration count \"" + animationIterationCount + "\". Expected a number or \"infinite\".";
  },
  negativeIterationCount(animationIterationCount) {
    return "Iteration count cannot be negative, received \"" + animationIterationCount + "\".";
  },
  invalidFillMode(animationFillMode) {
    return "Invalid fill mode \"" + animationFillMode + "\".";
  },
  invalidPlayState(animationPlayState) {
    return "Invalid play state \"" + animationPlayState + "\".";
  }
};

export { ERROR_MESSAGES };
export function normalizeDirection(animationDirection) {
  let str = animationDirection;
  if (animationDirection === undefined) {
    str = "normal";
  }
  const VALID_ANIMATION_DIRECTIONS = VALID_ANIMATION_DIRECTIONS2.VALID_ANIMATION_DIRECTIONS;
  if (VALID_ANIMATION_DIRECTIONS.has(str)) {
    return str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] " + obj.invalidAnimationDirection(str));
    throw error;
  }
}
export function normalizeIterationCount(animationIterationCount) {
  let num = animationIterationCount;
  if (animationIterationCount === undefined) {
    num = 1;
  }
  if ("infinite" !== num) {
    if (num !== Infinity) {
      const obj = _mod1668;
      if (obj.isNumber(num)) {
        if (num < 0) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error = new Error("[Reanimated] " + obj.negativeIterationCount(num));
          throw error;
        } else {
          return num;
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error1 = new Error("[Reanimated] " + obj.invalidIterationCount(num));
        throw error1;
      }
    }
  }
  return -1;
}
export function normalizeFillMode(animationFillMode) {
  let str = animationFillMode;
  if (animationFillMode === undefined) {
    str = "none";
  }
  const VALID_FILL_MODES = VALID_ANIMATION_DIRECTIONS2.VALID_FILL_MODES;
  if (VALID_FILL_MODES.has(str)) {
    return str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] " + obj.invalidFillMode(str));
    throw error;
  }
}
export function normalizePlayState(animationPlayState) {
  let str = animationPlayState;
  if (animationPlayState === undefined) {
    str = "running";
  }
  const VALID_PLAY_STATES = VALID_ANIMATION_DIRECTIONS2.VALID_PLAY_STATES;
  if (VALID_PLAY_STATES.has(str)) {
    return str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] " + obj.invalidPlayState(str));
    throw error;
  }
}
export function normalizeSingleCSSAnimationSettings(animationName) {
  let animationDelay;
  let animationDirection;
  let animationDuration;
  let animationFillMode;
  let animationIterationCount;
  let animationPlayState;
  let animationTimingFunction;
  let num;
  let obj2;
  let obj3;
  let obj4;
  ({ animationIterationCount, animationDirection, animationFillMode, animationPlayState } = animationName);
  const obj = { duration: obj2.normalizeDuration(animationDuration), timingFunction: obj3.normalizeTimingFunction(animationTimingFunction), delay: obj4.normalizeDelay(animationDelay), iterationCount: num, direction: null, fillMode: null, playState: null };
  ({ animationDuration, animationTimingFunction, animationDelay } = animationName);
  obj2 = normalizeDelay;
  obj3 = normalizeDelay;
  obj4 = normalizeDelay;
  if (animationIterationCount === undefined) {
    animationIterationCount = 1;
  }
  num = -1;
  if ("infinite" !== animationIterationCount) {
    num = -1;
    if (animationIterationCount !== Infinity) {
      const tmpResult = _mod1668;
      if (tmpResult.isNumber(animationIterationCount)) {
        num = animationIterationCount;
        if (animationIterationCount < 0) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error = new Error("[Reanimated] " + obj.negativeIterationCount(animationIterationCount));
          throw error;
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error1 = new Error("[Reanimated] " + obj.invalidIterationCount(animationIterationCount));
        throw error1;
      }
    }
  }
  if (animationDirection === undefined) {
    animationDirection = "normal";
  }
  const VALID_ANIMATION_DIRECTIONS = tmp(1777).VALID_ANIMATION_DIRECTIONS;
  if (VALID_ANIMATION_DIRECTIONS.has(animationDirection)) {
    obj.direction = animationDirection;
    if (animationFillMode === undefined) {
      animationFillMode = "none";
    }
    const VALID_FILL_MODES = tmp(1777).VALID_FILL_MODES;
    if (VALID_FILL_MODES.has(animationFillMode)) {
      obj.fillMode = animationFillMode;
      if (animationPlayState === undefined) {
        animationPlayState = "running";
      }
      const VALID_PLAY_STATES = tmp(1777).VALID_PLAY_STATES;
      if (VALID_PLAY_STATES.has(animationPlayState)) {
        obj.playState = animationPlayState;
        return obj;
      } else {
        const _Error5 = Error;
        const _HermesInternal5 = HermesInternal;
        const self9 = this;
        const self10 = this;
        const error2 = new Error("[Reanimated] " + obj.invalidPlayState(animationPlayState));
        throw error2;
      }
    } else {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const self7 = this;
      const self8 = this;
      const error3 = new Error("[Reanimated] " + obj.invalidFillMode(animationFillMode));
      throw error3;
    }
  } else {
    const _Error3 = Error;
    const _HermesInternal3 = HermesInternal;
    const self5 = this;
    const self6 = this;
    const error4 = new Error("[Reanimated] " + obj.invalidAnimationDirection(animationDirection));
    throw error4;
  }
}
export function getAnimationSettingsUpdates(normalizedSettings, normalizedSettings2) {
  const obj = {};
  if (normalizedSettings.duration !== normalizedSettings2.duration) {
    obj.duration = normalizedSettings2.duration;
  }
  let tmp = normalizedSettings.timingFunction === normalizedSettings2.timingFunction;
  if (!tmp) {
    const timingFunction = normalizedSettings.timingFunction;
    let deepEqualResult = typeof timingFunction === "object";
    if (typeof timingFunction === "object") {
      const obj2 = _mod1761;
      deepEqualResult = obj2.deepEqual(normalizedSettings.timingFunction, normalizedSettings2.timingFunction);
    }
    tmp = deepEqualResult;
  }
  if (!tmp) {
    obj.timingFunction = normalizedSettings2.timingFunction;
  }
  if (normalizedSettings.delay !== normalizedSettings2.delay) {
    obj.delay = normalizedSettings2.delay;
  }
  if (normalizedSettings.iterationCount !== normalizedSettings2.iterationCount) {
    obj.iterationCount = normalizedSettings2.iterationCount;
  }
  if (normalizedSettings.direction !== normalizedSettings2.direction) {
    obj.direction = normalizedSettings2.direction;
  }
  if (normalizedSettings.fillMode !== normalizedSettings2.fillMode) {
    obj.fillMode = normalizedSettings2.fillMode;
  }
  if (normalizedSettings.playState !== normalizedSettings2.playState) {
    obj.playState = normalizedSettings2.playState;
  }
  return obj;
}
