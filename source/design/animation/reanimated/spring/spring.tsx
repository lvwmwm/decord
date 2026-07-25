// Module ID: 4543
// Function ID: 39856
// Name: withSpring
// Dependencies: [4133, 4134, 3992, 2]

// Module 4543 (withSpring)
import { CONFIG_NEVER_ANIMATE } from "CONFIG_NEVER_ANIMATE";

let closure_3 = { code: "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);}" };
const tmp2 = (() => {
  export function withSpring(value, SUBTLE_SPRING, onComplete, fn) {
    let str = onComplete;
    if (onComplete === undefined) {
      str = "respect-motion-settings";
    }
    const accessibilityPreferencesSharedValue = outer1_0(outer1_1[1]).accessibilityPreferencesSharedValue;
    if ("animate-always" === str) {
      let tmp4 = SUBTLE_SPRING;
      if (tmp2) {
        let obj = {};
        obj = SUBTLE_SPRING;
        if (null == SUBTLE_SPRING) {
          obj = {};
        }
        const merged = Object.assign(obj);
        obj["reduceMotion"] = outer1_0(outer1_1[2]).ReduceMotion.Never;
        tmp4 = obj;
      }
      let tmp3 = tmp4;
    } else {
      tmp3 = outer1_2;
    }
    return outer1_0(outer1_1[2]).withSpring(value, tmp3, fn);
  }
  withSpring.__closure = { accessibilityPreferencesSharedValue: require(4134) /* mutable */.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE, ReduceMotion: require(3992).ReduceMotion, REAwithSpring: require(3992).withSpring };
  withSpring.__workletHash = 14783154107972;
  withSpring.__initData = closure_3;
  return withSpring;
})();
const result = require("module_3992").fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");
