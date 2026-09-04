// Module ID: 4935
// Function ID: 4936
// Name: CONFIG_NEVER_ANIMATE
// Dependencies: [4483, 4484, 4218, 2]
// Exports: withSpring

// Module 4935 (CONFIG_NEVER_ANIMATE)
import set from "set" /* 2 */;
import _mod4218 from "module_4218" /* 4218 */;
import CONFIG_NEVER_ANIMATE2 from "CONFIG_NEVER_ANIMATE" /* 4483 */;
import mutable from "mutable" /* 4484 */;

const CONFIG_NEVER_ANIMATE = CONFIG_NEVER_ANIMATE2.CONFIG_NEVER_ANIMATE;
function withSpring(value, SUBTLE_SPRING, fn, fn2) {
  let str = fn;
  if (fn === undefined) {
    str = "respect-motion-settings";
  }
  const accessibilityPreferencesSharedValue = mutable.accessibilityPreferencesSharedValue;
  if ("animate-always" === str) {
    let tmp7 = SUBTLE_SPRING;
    if (tmp4) {
      let obj = SUBTLE_SPRING;
      if (SUBTLE_SPRING == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.reduceMotion = tmp(4218).ReduceMotion.Never;
      tmp7 = obj;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE;
  }
  return _mod4218.withSpring(value, tmp5, fn2);
}
withSpring.__closure = { accessibilityPreferencesSharedValue: mutable.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE, ReduceMotion: _mod4218.ReduceMotion, REAwithSpring: _mod4218.withSpring };
withSpring.__workletHash = 14783154107972;
withSpring.__initData = { code: "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);}" };
let obj = { accessibilityPreferencesSharedValue: mutable.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE, ReduceMotion: _mod4218.ReduceMotion, REAwithSpring: _mod4218.withSpring };
const result = set.fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");

export { withSpring };
