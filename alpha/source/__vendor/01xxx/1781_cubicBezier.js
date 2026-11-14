// Module ID: 1781
// Function ID: 1782
// Name: cubicBezier
// Dependencies: [1782, 1783, 1784]
// Exports: cubicBezier, linear, steps

// Module 1781 (cubicBezier)
import _mod1782 from "module_1782" /* 1782 */;
import _mod1783 from "module_1783" /* 1783 */;
import _mod1784 from "module_1784" /* 1784 */;


export function cubicBezier(x1, y1, x2, y2) {
  const cubicBezierEasing = new _mod1782.CubicBezierEasing(x1, y1, x2, y2);
  return cubicBezierEasing;
}
export function steps(stepsNumber) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "jump-end";
  }
  const stepsEasing = new _mod1783.StepsEasing(stepsNumber, str);
  return stepsEasing;
}
export function linear() {
  const items = [...arguments];
  const linearEasing = new _mod1784.LinearEasing(items);
  return linearEasing;
}
export const CubicBezierEasing = _mod1782.CubicBezierEasing;
export const LinearEasing = _mod1784.LinearEasing;
export const StepsEasing = _mod1783.StepsEasing;
