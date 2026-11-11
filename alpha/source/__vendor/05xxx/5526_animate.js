// Module ID: 5526
// Function ID: 5527
// Name: animate
// Dependencies: [5508, 1652]
// Exports: animate

// Module 5526 (animate)
import _mod1652 from "module_1652" /* 1652 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5508 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
const items = [{ code: "(function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){let[ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring]=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);})" }, GESTURE_SOURCE.ANIMATION_CONFIGS, GESTURE_SOURCE.ANIMATION_METHOD, _mod1652.withTiming, _mod1652.withSpring];
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function pnpm_animateTs1(arg0) {
  let configs;
  let onComplete;
  let overrideReduceMotion;
  let point;
  let velocity;
  ({ point, configs, velocity } = arg0);
  if (velocity === undefined) {
    velocity = 0;
  }
  ({ overrideReduceMotion, onComplete } = arg0);
  if (!configs) {
    configs = c0;
  }
  if (overrideReduceMotion) {
    configs.reduceMotion = overrideReduceMotion;
  }
  if (!("duration" in configs)) {
    let tmp;
    let TIMING;
    let tmp4;
    if (!("easing" in configs)) {
      tmp = constants;
      TIMING = constants.SPRING;
    }
    if (TIMING === tmp.TIMING) {
      tmp4 = _undefined2(point, configs, onComplete);
    } else {
      const _Object = Object;
      const obj = { velocity };
      tmp4 = _undefined3(point, Object.assign(obj, configs), onComplete);
    }
    return tmp4;
  }
  TIMING = constants.TIMING;
  tmp = constants;
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
pnpm_animateTs1.__closure = items1;
pnpm_animateTs1.__workletHash = 7639006986976;
pnpm_animateTs1.__initData = tmp2;

export const animate = pnpm_animateTs1;
