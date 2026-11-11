// Module ID: 5859
// Function ID: 5860
// Name: FadeOutLottieAnimation
// Dependencies: [32, 19, 5244, 21, 5243, 504, 1652, 5485, 1705, 5860, 2]
// Exports: default

// Module 5859 (FadeOutLottieAnimation)
import Fragment from "Fragment" /* 21 */;
import _modDef1652 from "module_1652" /* 1652 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5860 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let flag, importDefault;

const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ content: { width: "100%" } });
let closure_8 = { code: "(function FadeOutLottieAnimationTsx1(finished){let[scheduleOnRN,setIsFadeOut]=this.__closure;if(finished)scheduleOnRN(setIsFadeOut,false);})" };
let closure_9 = { code: "(function FadeOutLottieAnimationTsx2(){let[isAnimationComplete,isFadeOut,withTiming,_worklet_16247045492721_init_data,scheduleOnRN,setIsFadeOut]=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function FadeOutLottieAnimationTsx1Factory([_worklet_16247045492721_init_data,scheduleOnRN,setIsFadeOut]){const FadeOutLottieAnimationTsx1=function(finished){if(finished)scheduleOnRN(setIsFadeOut,false);};FadeOutLottieAnimationTsx1.__closure=[scheduleOnRN,setIsFadeOut];FadeOutLottieAnimationTsx1.__workletHash=16247045492721;FadeOutLottieAnimationTsx1.__initData=_worklet_16247045492721_init_data;return FadeOutLottieAnimationTsx1;}([_worklet_16247045492721_init_data,scheduleOnRN,setIsFadeOut]))};}return{opacity:0};})" };
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  let _undefined;
  let c1;
  let first;
  let num;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21Result;
  let tmp4;
  let tmp7;
  let useReducedMotion;
  onComplete = onComplete.onComplete;
  const merged = Object.assign(onComplete, Object.assign({ onComplete: 0 }));
  let tmp2 = closure_7();
  const tmp3 = _slicedToArray(react.useState(false), 2);
  [tmp4, c1] = tmp3;
  [first, tmp7] = react.useState(true);
  const tmp8 = dependencyMap;
  let obj = onComplete(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => {
    _undefined(false);
  }, []);
  onComplete(1652);
  let items1 = [closure_9, tmp4, first, onComplete(5485).withTiming, closure_8, onComplete(1705).scheduleOnRN, tmp7];
  let c0;
  importDefault = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class FadeOutLottieAnimationTsx2 {
    constructor() {
      let obj;
      let tmp7;
      let tmp8;
      let tmp9;
      let tmp = c0;
      if (tmp) {
        let obj3;
        const tmp2 = c1;
        if (tmp2) {
          const items = [c3, , ];
          items[1] = c4;
          items[2] = c5;
          [tmp7, tmp8, tmp9] = items;
          const obj2 = { opacity: _undefined2(0, { duration: 300 }, "respect-motion-settings", FadeOutLottieAnimationTsx1) };
          class FadeOutLottieAnimationTsx1 {
            constructor(arg0) {
              tmp = arg0;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_1;
                flag = false;
                tmp4 = closure_0(closure_1, false);
              }
              return;
            }
          }
          const items1 = [tmp8, tmp9];
          FadeOutLottieAnimationTsx1.__closure = items1;
          FadeOutLottieAnimationTsx1.__workletHash = 16247045492721;
          FadeOutLottieAnimationTsx1.__initData = tmp7;
          obj3 = obj2;
        } else {
          obj3 = { opacity: 0 };
        }
        obj = obj3;
      } else {
        obj = { opacity: 1 };
      }
      return obj;
    }
  }
  const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  FadeOutLottieAnimationTsx2.__closure = items2;
  FadeOutLottieAnimationTsx2.__workletHash = 15919475449507;
  FadeOutLottieAnimationTsx2.__initData = tmp12;
  if (!tmp4) {
    let obj2 = { style: tmp19, children: null };
    const View = _modDef1652.View;
    let obj3 = {
      style: tmp2.content,
      speed: num,
      onAnimationFinish(isCancelled) {
          if (onComplete != null) {
            tmp(isCancelled);
          }
          _undefined(true);
        }
    };
    num = 1;
    LottieAnimationViewDefault;
    if (stateFromStores) {
      num = 0.5;
    }
    const merged1 = Object.assign(merged);
    tmp21Result = tmp21(View, obj2);
  } else {
    tmp21Result = null;
  }
  return tmp21Result;
};
