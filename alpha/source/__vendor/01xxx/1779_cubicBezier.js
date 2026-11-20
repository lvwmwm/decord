// Module ID: 1779
// Function ID: 1780
// Name: cubicBezier
// Dependencies: [1780, 1781, 1782]
// Exports: cubicBezier, linear, steps

// Module 1779 (cubicBezier)
import _mod1780 from "module_1780" /* 1780 */;
import _mod1781 from "module_1781" /* 1781 */;
import _mod1782 from "module_1782" /* 1782 */;


export function cubicBezier(x1, y1, x2, y2) {
  const cubicBezierEasing = new _mod1780.CubicBezierEasing(x1, y1, x2, y2);
  return cubicBezierEasing;
}
export function steps(stepsNumber) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "jump-end";
  }
  const stepsEasing = new _mod1781.StepsEasing(stepsNumber, str);
  return stepsEasing;
}
export function linear() {
  const items = [...arguments];
  const linearEasing = new _mod1782.LinearEasing(items);
  return linearEasing;
}
export const CubicBezierEasing = _mod1780.CubicBezierEasing;
export const LinearEasing = _mod1782.LinearEasing;
export const StepsEasing = _mod1781.StepsEasing;
