// Module ID: 1032
// Function ID: 11113
// Name: updateEstimate
// Dependencies: [1022]

// Module 1032 (updateEstimate)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c3 = 0;
const Infinity = Infinity;
let c5 = 0;
function updateEstimate(arr) {
  const item = arr.forEach((interactionId) => {
    if (interactionId.interactionId) {
      const _Math = Math;
      outer1_4 = Math.min(outer1_4, interactionId.interactionId);
      const _Math2 = Math;
      const bound = Math.max(outer1_5, interactionId.interactionId);
      outer1_5 = bound;
      let num = 0;
      if (bound) {
        num = (outer1_5 - outer1_4) / 7 + 1;
      }
      const outer1_3 = num;
    }
  });
}
arg5.getInteractionCount = function getInteractionCount() {
  if (closure_2) {
    let tmp2 = c3;
  } else {
    const _performance = performance;
    tmp2 = performance.interactionCount || 0;
  }
  return tmp2;
};
arg5.initInteractionCountPolyfill = function initInteractionCountPolyfill() {
  if (!tmp) {
    let closure_2 = require(1022) /* observe */.observe("event", updateEstimate, { type: "event", buffered: true, durationThreshold: 0 });
    const obj = require(1022) /* observe */;
  }
};
