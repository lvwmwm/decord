// Module ID: 5575
// Function ID: 5576
// Name: snapPoint
// Dependencies: []
// Exports: snapPoint

// Module 5575 (snapPoint)
let tmp2;
const items = [{ code: "(function pnpm_snapPointTs1(value,velocity,points){const point=value+0.2*velocity;const deltas=points.map(function(p){return Math.abs(point-p);});const minDelta=Math.min.apply(null,deltas);return points.filter(function(p){return Math.abs(point-p)===minDelta;})[0];})" }];
[tmp2] = items;
function pnpm_snapPointTs1(arg0, arg1, arr) {
  let closure_0 = arg0 + 0.2 * arg1;
  let closure_1 = min.apply(null, arr.map((item) => Math.abs(closure_0 - item)));
  return arr.filter((item) => Math.abs(closure_0 - item) === closure_1)[0];
}
pnpm_snapPointTs1.__workletHash = 6015429275370;
pnpm_snapPointTs1.__initData = tmp2;

export const snapPoint = pnpm_snapPointTs1;
