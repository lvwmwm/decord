// Module ID: 1780
// Function ID: 1781
// Name: cubicBezier
// Dependencies: [1781, 1782, 1783]
// Exports: cubicBezier, linear, steps

// Module 1780 (cubicBezier)
import _mod1781 from "module_1781" /* 1781 */;
import _mod1782 from "module_1782" /* 1782 */;
import _mod1783 from "module_1783" /* 1783 */;


export function cubicBezier(x1, y1, x2, y2) {
  const cubicBezierEasing = new _mod1781.CubicBezierEasing(x1, y1, x2, y2);
  return cubicBezierEasing;
}
export function steps(stepsNumber) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "jump-end";
  }
  const stepsEasing = new _mod1782.StepsEasing(stepsNumber, str);
  return stepsEasing;
}
export function linear() {
  const items = [...arguments];
  const linearEasing = new _mod1783.LinearEasing(items);
  return linearEasing;
}
export const CubicBezierEasing = _mod1781.CubicBezierEasing;
export const LinearEasing = _mod1783.LinearEasing;
export const StepsEasing = _mod1782.StepsEasing;
