// Module ID: 1032
// Function ID: 11112
// Name: updateEstimate
// Dependencies: []

// Module 1032 (updateEstimate)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_3 = 0;
let closure_4 = Infinity;
let closure_5 = 0;
function updateEstimate(arr) {
  const item = arr.forEach((interactionId) => {
    if (interactionId.interactionId) {
      const _Math = Math;
      closure_4 = Math.min(closure_4, interactionId.interactionId);
      const _Math2 = Math;
      const bound = Math.max(bound, interactionId.interactionId);
      let num = 0;
      if (bound) {
        num = (bound - closure_4) / 7 + 1;
      }
    }
  });
}
arg5.getInteractionCount = function getInteractionCount() {
  if (closure_2) {
    let tmp2 = closure_3;
  } else {
    const _performance = performance;
    tmp2 = performance.interactionCount || 0;
  }
  return tmp2;
};
arg5.initInteractionCountPolyfill = function initInteractionCountPolyfill() {
  if (!tmp) {
    let closure_2 = arg1(arg6[0]).observe("event", updateEstimate, { 1184439988: 3000, -1279569159: 15, 1852041348: 50 });
    const obj = arg1(arg6[0]);
  }
};
