// Module ID: 6211
// Function ID: 6212
// Dependencies: []
// Exports: clamp

// Module 6211
const fn = function n(arg0, arg1, arg2) {
  return Math.min(Math.max(arg1, arg0), arg2);
};
fn.__closure = {};
fn.__workletHash = 4405247003092;
fn.__initData = { code: "function pnpm_clampTs1(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}" };

export const clamp = fn;
