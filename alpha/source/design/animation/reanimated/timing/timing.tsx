// Module ID: 5091
// Function ID: 5092
// Name: timing
// Dependencies: [5092, 5093, 4810, 2]
// Exports: withTiming

// Module 5091 (timing)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import ReanimatedConstants from "ReanimatedConstants" /* 5092 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5093 */;
import size from "module_2" /* 2 */;

const CONFIG_NEVER_ANIMATE_TIMING = ReanimatedConstants.CONFIG_NEVER_ANIMATE_TIMING;
function withTiming(value, timingStandard, fn, fn2) {
  let tmp5;
  let str = fn;
  if (fn === undefined) {
    str = "respect-motion-settings";
  }
  const accessibilityPreferencesSharedValue = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
  if ("animate-always" === str) {
    let tmp7 = timingStandard;
    if ("animate-always" === str) {
      let obj = timingStandard;
      if (timingStandard == null) {
        obj = {};
      }
      const obj2 = { reduceMotion: ReanimatedRexport.ReduceMotion.Never };
      const merged = Object.assign(obj);
      tmp7 = obj2;
    }
    tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE_TIMING;
  }
  const tmpResult = ReanimatedRexport;
  return tmpResult.withTiming(value, tmp5, fn2);
}
let obj = { accessibilityPreferencesSharedValue: reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE_TIMING, ReduceMotion: ReanimatedRexport.ReduceMotion, REAwithTiming: ReanimatedRexport.withTiming };
withTiming.__closure = obj;
withTiming.__workletHash = 6710776253444;
withTiming.__initData = { code: "function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);}" };
const result = size.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export { withTiming };
