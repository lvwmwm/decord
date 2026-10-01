// Module ID: 7246
// Function ID: 7247
// Name: FadeOutLottieAnimation
// Dependencies: [32, 19, 4825, 21, 4836, 504, 4566, 4837, 5841, 2]
// Exports: default

// Module 7246 (FadeOutLottieAnimation)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, fn, num2, obj1, obj5, obj6, str, tmp4, tmp6, tmp7, tmp8, tmp9;

const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ content: { width: "100%" } });
const __initData = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
const __initData2 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  let closure_2;
  let num;
  let tmp14Result;
  let useReducedMotion;
  onComplete = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.assign({ onComplete: 0 }));
  let first1;
  setIsFadeOut = undefined;
  let tmp2 = closure_7();
  const tmp3 = first1(setIsFadeOut.useState(false), 2);
  const isAnimationComplete = tmp3[0];
  dependencyMap = tmp3[1];
  let tmp5 = first1(setIsFadeOut.useState(true), 2);
  first1 = tmp5[0];
  setIsFadeOut = tmp7;
  let obj = onComplete(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = setIsFadeOut.useEffect(() => {
    closure_2(false);
  }, []);
  onComplete(4566);
  class T {
    constructor() {
      tmp = closure_1;
      if (tmp) {
        tmp2 = closure_3;
        if (tmp2) {
          obj1 = { opacity: null };
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp5 = closure_0(closure_2[7]);
          fn = function t(arg0) {
            const tmp = arg0;
            if (tmp) {
              const obj = onComplete(closure_2[6]);
              obj.runOnJS(setIsFadeOut)(false);
            }
          };
          obj5 = { runOnJS: null, setIsFadeOut: null };
          withTiming = tmp5.withTiming;
          obj5.runOnJS = closure_0(closure_2[6]).runOnJS;
          tmp6 = closure_4;
          obj5.setIsFadeOut = closure_4;
          fn.__closure = obj5;
          num = 14133863353798;
          fn.__workletHash = 14133863353798;
          tmp7 = closure_9;
          fn.__initData = closure_9;
          str = "respect-motion-settings";
          num2 = 0;
          tmp8 = tmp5;
          tmp9 = fn;
          obj1.opacity = withTiming(0, { duration: 300 }, "respect-motion-settings", fn);
          obj6 = obj1;
        } else {
          obj6 = { opacity: 0 };
        }
        obj = obj6;
      } else {
        obj = { opacity: 1 };
      }
      return obj;
    }
  }
  let obj2 = { isAnimationComplete, isFadeOut: first1, withTiming: onComplete(4837).withTiming, runOnJS: onComplete(4566).runOnJS, setIsFadeOut: tmp7 };
  T.__closure = obj2;
  T.__workletHash = 1137618554665;
  T.__initData = __initData;
  if (!isAnimationComplete) {
    let obj3 = { style: tmp12, children: null };
    const View = isAnimationComplete(4566).View;
    let obj4 = {
      style: tmp2.content,
      speed: num,
      onAnimationFinish(isCancelled) {
          if (onComplete != null) {
            tmp(isCancelled);
          }
          closure_2(true);
        }
    };
    num = 1;
    isAnimationComplete(5841);
    if (stateFromStores) {
      num = 0.5;
    }
    const merged1 = Object.assign(merged);
    tmp14Result = tmp14(View, obj3);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
};
