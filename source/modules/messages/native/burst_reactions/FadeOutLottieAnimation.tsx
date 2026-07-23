// Module ID: 7069
// Function ID: 56513
// Name: FadeOutLottieAnimation
// Dependencies: [57, 31, 4122, 33, 4130, 566, 3991, 4131, 5453, 2]
// Exports: default

// Module 7069 (FadeOutLottieAnimation)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ content: { width: "100%" } });
let closure_8 = { code: "function FadeOutLottieAnimationTsx1(){const{isAnimationComplete,isFadeOut,withTiming,runOnJS,setIsFadeOut}=this.__closure;if(!isAnimationComplete){return{opacity:1};}if(isFadeOut){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(setIsFadeOut)(false);})};}return{opacity:0};}" };
let closure_9 = { code: "function FadeOutLottieAnimationTsx2(finished){const{runOnJS,setIsFadeOut}=this.__closure;if(finished)runOnJS(setIsFadeOut)(false);}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/burst_reactions/FadeOutLottieAnimation.tsx");

export default function FadeOutLottieAnimation(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = Object.create(null);
  obj.onComplete = 0;
  const merged = Object.assign(onComplete, obj);
  const tmp4 = first1(React.useState(false), 2);
  const first = tmp4[0];
  let num = 1;
  const dependencyMap = tmp4[1];
  const tmp6 = first1(React.useState(true), 2);
  first1 = tmp6[0];
  React = tmp8;
  obj = onComplete(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const effect = React.useEffect(() => {
    dependencyMap(false);
  }, []);
  onComplete(3991);
  class T {
    constructor() {
      obj = {};
      if (closure_1) {
        tmp2 = c3;
        if (c3) {
          tmp4 = onComplete;
          tmp5 = c2;
          num3 = 7;
          obj2 = onComplete(c2[7]);
          obj = {};
          num4 = 300;
          obj.duration = 300;
          fn = function t(arg0) {
            if (arg0) {
              onComplete(table[6]).runOnJS(outer1_4)(false);
              const obj = onComplete(table[6]);
            }
          };
          obj1 = {};
          num5 = 6;
          obj1.runOnJS = onComplete(c2[6]).runOnJS;
          tmp6 = result;
          obj1.setIsFadeOut = result;
          fn.__closure = obj1;
          num6 = 14133863353798;
          fn.__workletHash = 14133863353798;
          tmp7 = outer1_9;
          fn.__initData = outer1_9;
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
  obj = { isAnimationComplete: first, isFadeOut: first1, withTiming: onComplete(4131).withTiming, runOnJS: onComplete(3991).runOnJS, setIsFadeOut: tmp8 };
  T.__closure = obj;
  T.__workletHash = 1137618554665;
  T.__initData = closure_8;
  if (!first) {
    const obj1 = { style: tmp12 };
    let obj2 = { style: tmp3.content };
    if (stateFromStores) {
      num = 0.5;
    }
    obj2.speed = num;
    obj2.onAnimationFinish = function onAnimationFinish(isCancelled) {
      if (null != onComplete) {
        onComplete(isCancelled);
      }
      dependencyMap(true);
    };
    const merged1 = Object.assign(merged);
    obj1.children = jsx(first(5453), { style: tmp3.content });
    let tmp14Result = tmp14(first(3991).View, obj1);
    const tmp17 = first(5453);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
};
