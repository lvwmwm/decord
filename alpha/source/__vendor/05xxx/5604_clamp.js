// Module ID: 5604
// Function ID: 5605
// Name: clamp
// Dependencies: []
// Exports: clamp

// Module 5604 (clamp)
let tmp2;
const items = [{ code: "(function pnpm_clampTs1(value,lowerBound,upperBound){return Math.min(Math.max(lowerBound,value),upperBound);})" }];
[tmp2] = items;
function pnpm_clampTs1(arg0, arg1, arg2) {
  return Math.min(Math.max(arg1, arg0), arg2);
}
pnpm_clampTs1.__workletHash = 9277862090901;
pnpm_clampTs1.__initData = tmp2;

export const clamp = pnpm_clampTs1;
