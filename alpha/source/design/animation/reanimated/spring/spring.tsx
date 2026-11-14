// Module ID: 5939
// Function ID: 5940
// Name: spring/spring
// Dependencies: [5549, 5550, 1655, 2]
// Exports: withSpring

// Module 5939 (spring/spring)
import _mod1655 from "module_1655" /* 1655 */;
import ReanimatedConstants from "ReanimatedConstants" /* 5549 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5550 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
const items = [{ code: "(function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){let[accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring]=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);})" }, , , , ];
const CONFIG_NEVER_ANIMATE = ReanimatedConstants.CONFIG_NEVER_ANIMATE;
items[1] = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
items[2] = CONFIG_NEVER_ANIMATE;
items[3] = _mod1655.ReduceMotion;
items[4] = _mod1655.withSpring;
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function withSpring(channelDockHeight, Reanimated3DefaultSpringConfig, arg2, BalanceCounterTsx1) {
  let tmp3;
  let str = arg2;
  if (arg2 === undefined) {
    str = "respect-motion-settings";
  }
  if ("animate-always" === str) {
    let tmp5 = Reanimated3DefaultSpringConfig;
    if ("animate-always" === str) {
      let obj = Reanimated3DefaultSpringConfig;
      if (Reanimated3DefaultSpringConfig == null) {
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
  return _undefined2(channelDockHeight, tmp3, BalanceCounterTsx1);
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
withSpring.__closure = items1;
withSpring.__workletHash = 7534957405213;
withSpring.__initData = tmp2;
const result = size.fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");

export { withSpring };
