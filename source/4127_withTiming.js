// Module ID: 4127
// Function ID: 34341
// Name: withTiming
// Dependencies: [15, 17, 18, 5]

// Module 4127 (withTiming)
import { CONFIG_NEVER_ANIMATE_TIMING as closure_2 } from "_possibleConstructorReturn";
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_3 = { code: "function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);}" };
const result = asyncGeneratorStep.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export const withTiming = () => {
  function withTiming(value, timingStandard, onComplete, fn) {
    let str = onComplete;
    if (onComplete === undefined) {
      str = "respect-motion-settings";
    }
    const accessibilityPreferencesSharedValue = callback(closure_1[1]).accessibilityPreferencesSharedValue;
    if ("animate-always" === str) {
      let tmp4 = timingStandard;
      if (tmp2) {
        let obj = {};
        obj = timingStandard;
        if (null == timingStandard) {
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
    return callback(closure_1[2]).withTiming(value, tmp3, fn);
  }
  withTiming.__closure = { accessibilityPreferencesSharedValue: require(dependencyMap[1]).accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE_TIMING: closure_2, ReduceMotion: require(dependencyMap[2]).ReduceMotion, REAwithTiming: require(dependencyMap[2]).withTiming };
  withTiming.__workletHash = 6710776253444;
  withTiming.__initData = closure_3;
  return withTiming;
}();
