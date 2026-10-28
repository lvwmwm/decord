// Module ID: 5476
// Function ID: 5477
// Dependencies: []
// Exports: clamp

// Module 5476
const fn = function n(arg0, arg1, arg2) {
  return Math.min(Math.max(arg1, arg0), arg2);
};
fn.__closure = {};
fn.__workletHash = 4405247003092;
fn.__initData = { code: "function pnpm_clampTs1(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);}" };

export const clamp = fn;
