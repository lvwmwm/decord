// Module ID: 7064
// Function ID: 56479
// Name: FadeOutLottieAnimation
// Dependencies: []
// Exports: default

// Module 7064 (FadeOutLottieAnimation)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ content: { width: "100%" } });
let closure_8 = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
let closure_9 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  const arg1 = onComplete.onComplete;
  let obj = Object.create(null);
  obj.onComplete = 0;
  const merged = Object.assign(onComplete, obj);
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  const importDefault = first;
  let num = 1;
  let closure_2 = tmp4[1];
  const tmp6 = callback(React.useState(true), 2);
  const first1 = tmp6[0];
  const callback = first1;
  const React = tmp8;
  obj = arg1(closure_2[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => {
    callback(false);
  }, []);
  arg1(closure_2[6]);
  class T {
    constructor() {
      obj = {};
      if (closure_1) {
        tmp2 = closure_3;
        if (closure_3) {
          tmp4 = onComplete;
          tmp5 = closure_2;
          num3 = 7;
          obj2 = onComplete(closure_2[7]);
          obj = {};
          num4 = 300;
          obj.duration = 300;
          fn = function t(arg0) {
            if (arg0) {
              callback(closure_2[6]).runOnJS(closure_4)(false);
              const obj = callback(closure_2[6]);
            }
          };
          obj1 = {};
          num5 = 6;
          obj1.runOnJS = onComplete(closure_2[6]).runOnJS;
          tmp6 = closure_4;
          obj1.setIsFadeOut = closure_4;
          fn.__closure = obj1;
          num6 = 14133863353798;
          fn.__workletHash = 14133863353798;
          tmp7 = closure_9;
          fn.__initData = closure_9;
          num7 = 0;
          str = "respect-motion-settings";
          tmp8 = obj2;
          tmp9 = obj;
          tmp10 = fn;
          obj.opacity = obj2.withTiming(0, obj, "respect-motion-settings", fn);
          tmp3 = obj;
        } else {
          num2 = 0;
          obj.opacity = 0;
          tmp3 = obj;
        }
        tmp11 = tmp3;
      } else {
        num = 1;
        obj.opacity = 1;
        tmp = obj;
        return obj;
      }
      return;
    }
  }
  obj = { isAnimationComplete: first, isFadeOut: first1, withTiming: arg1(closure_2[7]).withTiming, runOnJS: arg1(closure_2[6]).runOnJS, setIsFadeOut: tmp8 };
  T.__closure = obj;
  T.__workletHash = 1137618554665;
  T.__initData = closure_8;
  if (!first) {
    const obj1 = { style: tmp12 };
    const obj2 = { style: tmp3.content };
    if (stateFromStores) {
      num = 0.5;
    }
    obj2.speed = num;
    obj2.onAnimationFinish = function onAnimationFinish(isCancelled) {
      if (null != onComplete) {
        onComplete(isCancelled);
      }
      callback(true);
    };
    const merged1 = Object.assign(merged);
    obj1.children = jsx(importDefault(closure_2[8]), obj2);
    let tmp14Result = tmp14(importDefault(closure_2[6]).View, obj1);
    const tmp17 = importDefault(closure_2[8]);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
};
