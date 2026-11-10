// Module ID: 5412
// Function ID: 5413
// Name: normalizeSnapPoint
// Dependencies: []
// Exports: normalizeSnapPoint

// Module 5412 (normalizeSnapPoint)
let tmp2;
const items = [{ code: "(function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);})" }];
[tmp2] = items;
function pnpm_normalizeSnapPointTs1(str, arg1) {
  let result = str;
  if (typeof str === "string") {
    const _Number = Number;
    result = Number(str.split("%")[0]) * arg1 / 100;
  }
  return Math.max(0, arg1 - result);
}
pnpm_normalizeSnapPointTs1.__workletHash = 5790948994918;
pnpm_normalizeSnapPointTs1.__initData = tmp2;

export const normalizeSnapPoint = pnpm_normalizeSnapPointTs1;
