// Module ID: 1782
// Function ID: 1783
// Dependencies: [1783]
// Exports: normalizeTransitionBehavior

// Module 1782
import VALID_TRANSITION_BEHAVIORS2 from "VALID_TRANSITION_BEHAVIORS" /* 1783 */;

const ERROR_MESSAGES = {
  invalidTransitionBehavior(normal) {
    return "Invalid transition behavior \"" + normal + "\".";
  }
};

export { ERROR_MESSAGES };
export function normalizeTransitionBehavior(transitionBehavior) {
  let str = transitionBehavior;
  if (transitionBehavior === undefined) {
    str = "normal";
  }
  const VALID_TRANSITION_BEHAVIORS = VALID_TRANSITION_BEHAVIORS2.VALID_TRANSITION_BEHAVIORS;
  if (VALID_TRANSITION_BEHAVIORS.includes(str)) {
    return "allow-discrete" === str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[Reanimated] " + obj.invalidTransitionBehavior(str));
    throw error;
  }
}
