// Module ID: 1778
// Function ID: 1779
// Name: cubicBezier
// Dependencies: [1779, 1780, 1781]
// Exports: cubicBezier, linear, steps

// Module 1778 (cubicBezier)
import _mod1779 from "module_1779" /* 1779 */;
import _mod1780 from "module_1780" /* 1780 */;
import _mod1781 from "module_1781" /* 1781 */;


export function cubicBezier(x1, y1, x2, y2) {
  const cubicBezierEasing = new _mod1779.CubicBezierEasing(x1, y1, x2, y2);
  return cubicBezierEasing;
}
export function steps(stepsNumber) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "jump-end";
  }
  const stepsEasing = new _mod1780.StepsEasing(stepsNumber, str);
  return stepsEasing;
}
export function linear() {
  const items = [...arguments];
  const linearEasing = new _mod1781.LinearEasing(items);
  return linearEasing;
}
export const CubicBezierEasing = _mod1779.CubicBezierEasing;
export const LinearEasing = _mod1781.LinearEasing;
export const StepsEasing = _mod1780.StepsEasing;
