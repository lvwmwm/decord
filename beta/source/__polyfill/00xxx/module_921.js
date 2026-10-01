// Module ID: 921
// Function ID: 922
// Dependencies: [911]
// Exports: getInteractionCount, initInteractionCountPolyfill

// Module 921
import observe from "observe" /* 911 */;

let bound, closure_2, closure_4;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c3 = 0;
const Infinity = Infinity;
let c5 = 0;
function updateEstimate(arr) {
  let num;
  const item = arr.forEach((interactionId) => {
    if (interactionId.interactionId) {
      const _Math = Math;
      closure_4 = Math.min(closure_4, interactionId.interactionId);
      const _Math2 = Math;
      bound = Math.max(bound, interactionId.interactionId);
    }
  });
}

export const getInteractionCount = () => {
  let tmp3;
  const tmp = closure_2;
  if (tmp) {
    tmp3 = c3;
  } else {
    const _performance = performance;
    tmp3 = performance.interactionCount || 0;
  }
  return tmp3;
};
export const initInteractionCountPolyfill = () => {
  const tmp = "interactionCount" in performance || closure_2;
  if (!tmp) {
    const obj = observe;
    closure_2 = obj.observe("event", updateEstimate, { type: "event", buffered: true, durationThreshold: 0 });
  }
};
