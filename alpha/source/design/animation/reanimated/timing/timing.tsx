// Module ID: 5400
// Function ID: 5401
// Name: timing/timing
// Dependencies: [5401, 5402, 1652, 2]
// Exports: withTiming

// Module 5400 (timing/timing)
import _mod1652 from "module_1652" /* 1652 */;
import ReanimatedConstants from "ReanimatedConstants" /* 5401 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5402 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
const items = [{ code: "(function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){let[accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming]=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);})" }, , , , ];
const CONFIG_NEVER_ANIMATE_TIMING = ReanimatedConstants.CONFIG_NEVER_ANIMATE_TIMING;
items[1] = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
items[2] = CONFIG_NEVER_ANIMATE_TIMING;
items[3] = _mod1652.ReduceMotion;
items[4] = _mod1652.withTiming;
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function withTiming(c9, timingStandard, arg2, BadgeUnlockAnimationTsx5) {
  let tmp3;
  let str = arg2;
  if (arg2 === undefined) {
    str = "respect-motion-settings";
  }
  if ("animate-always" === str) {
    let tmp5 = timingStandard;
    if ("animate-always" === str) {
      let obj = timingStandard;
      if (timingStandard == null) {
        obj = {};
      }
      const obj2 = { reduceMotion: Never.Never };
      const merged = Object.assign(obj);
      tmp5 = obj2;
    }
    tmp3 = tmp5;
  } else {
    tmp3 = c1;
  }
  return _undefined2(c9, tmp3, BadgeUnlockAnimationTsx5);
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
withTiming.__closure = items1;
withTiming.__workletHash = 8505479360605;
withTiming.__initData = tmp2;
const result = size.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export { withTiming };
