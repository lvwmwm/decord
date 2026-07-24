// Module ID: 5301
// Function ID: 45783
// Name: pnpm_snapPointTs1
// Dependencies: []

// Module 5301 (pnpm_snapPointTs1)
/* worklet (recovered source) */ function pnpm_snapPointTs1(value,velocity,points){const point=value+0.2*velocity;const deltas=points.map(function(p){return Math.abs(point-p);});const minDelta=Math.min.apply(null,deltas);return points.filter(function(p){return Math.abs(point-p)===minDelta;})[0];}
pnpm_snapPointTs1.__closure = {};
pnpm_snapPointTs1.__workletHash = 8913698095371;
pnpm_snapPointTs1.__initData = { code: "function pnpm_snapPointTs1(value,velocity,points){const point=value+0.2*velocity;const deltas=points.map(function(p){return Math.abs(point-p);});const minDelta=Math.min.apply(null,deltas);return points.filter(function(p){return Math.abs(point-p)===minDelta;})[0];}" };
arg5.snapPoint = pnpm_snapPointTs1;
