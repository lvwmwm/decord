// Module ID: 7034
// Function ID: 7035
// Dependencies: []
// Exports: clamp

// Module 7034
const fn = function n(arg0, arg1, arg2) {
  return Math.min(Math.max(arg1, arg0), arg2);
};
fn.__closure = {};
fn.__workletHash = 4405247003092;
fn.__initData = { code: "function pnpm_clampTs1(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}" };

export const clamp = fn;
