// Module ID: 4538
// Function ID: 39812
// Name: withSpring
// Dependencies: [15, 17, 18, 5]

// Module 4538 (withSpring)
import { CONFIG_NEVER_ANIMATE } from "_possibleConstructorReturn";
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_3 = { code: "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);}" };
const result = asyncGeneratorStep.fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");

export const withSpring = () => {
  function withSpring(targetHeight, closure_8, onComplete, fn) {
    let str = onComplete;
    if (onComplete === undefined) {
      str = "respect-motion-settings";
    }
    const accessibilityPreferencesSharedValue = callback(closure_1[1]).accessibilityPreferencesSharedValue;
    if ("animate-always" === str) {
      let tmp4 = closure_8;
      if (tmp2) {
        let obj = {};
        obj = closure_8;
        if (null == closure_8) {
          obj = {};
        }
        const merged = Object.assign(obj);
        obj["reduceMotion"] = callback(closure_1[2]).ReduceMotion.Never;
        tmp4 = obj;
      }
      let tmp3 = tmp4;
    } else {
      tmp3 = closure_2;
    }
    return callback(closure_1[2]).withSpring(targetHeight, tmp3, fn);
  }
  withSpring.__closure = { accessibilityPreferencesSharedValue: require(dependencyMap[1]).accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE, ReduceMotion: require(dependencyMap[2]).ReduceMotion, REAwithSpring: require(dependencyMap[2]).withSpring };
  withSpring.__workletHash = 14783154107972;
  withSpring.__initData = closure_3;
  return withSpring;
}();
