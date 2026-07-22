// Module ID: 5204
// Function ID: 45113
// Name: pnpm_normalizeSnapPointTs1
// Dependencies: []

// Module 5204 (pnpm_normalizeSnapPointTs1)
/* worklet (recovered source) */ function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);}
pnpm_normalizeSnapPointTs1.__closure = {};
pnpm_normalizeSnapPointTs1.__workletHash = 14612470006791;
pnpm_normalizeSnapPointTs1.__initData = { code: "function pnpm_normalizeSnapPointTs1(snapPoint,containerHeight){let normalizedSnapPoint=snapPoint;if(typeof normalizedSnapPoint==='string'){normalizedSnapPoint=Number(normalizedSnapPoint.split('%')[0])*containerHeight/100;}return Math.max(0,containerHeight-normalizedSnapPoint);}" };
arg5.normalizeSnapPoint = pnpm_normalizeSnapPointTs1;
