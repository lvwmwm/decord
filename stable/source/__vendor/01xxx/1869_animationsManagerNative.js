// Module ID: 1869
// Function ID: 1870
// Name: animationsManagerNative
// Dependencies: [1832, 1793, 1839, 1697, 1705]
// Exports: initializeLayoutAnimationsManager

// Module 1869 (animationsManagerNative)
import LayoutAnimationType from "LayoutAnimationType" /* 1697 */;
import _mod1705 from "module_1705" /* 1705 */;
import mutableHostDecorator from "mutableHostDecorator" /* 1832 */;
import _mod1839 from "module_1839" /* 1839 */;
import DynamicFlags from "module_1793" /* 1793 */;

let __frameTimestamp, map, map1;

let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp18;
let tmp19;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let items = [{ code: "(function makeMutableUI_Pnpm_animationsManagerNativeTs1(initial){let[mutableHostDecorator]=this.__closure;return mutableHostDecorator({value:initial});})" }, mutableHostDecorator.mutableHostDecorator];
[tmp2, tmp3] = items;
function makeMutableUI(value) {
  const obj = { value };
  return _undefined(obj);
}
let items1 = [tmp3];
makeMutableUI.__closure = items1;
makeMutableUI.__workletHash = 1961774605498;
makeMutableUI.__initData = tmp2;
const items2 = [{ code: "(function startObservingProgress_Pnpm_animationsManagerNativeTs2(tag,sharedValue,scheduleFlush){let[TAG_OFFSET]=this.__closure;sharedValue.addListener(tag+TAG_OFFSET,function(){global._notifyAboutProgress(tag,sharedValue.value);scheduleFlush();});})" }, 1000000000];
[tmp4, tmp5] = items2;
function startObservingProgress(arg0, addListener, arg2) {
  let closure_0 = arg0;
  let closure_1 = addListener;
  let closure_2 = arg2;
  addListener.addListener(arg0 + c0, () => {
    closure_2_0._notifyAboutProgress(closure_0, value.value);
    closure_2();
  });
}
const items3 = [tmp5];
startObservingProgress.__closure = items3;
startObservingProgress.__workletHash = 16048404374493;
startObservingProgress.__initData = tmp4;
const items4 = [{ code: "(function removeProgressListener_Pnpm_animationsManagerNativeTs3(tag,sharedValue){let[TAG_OFFSET]=this.__closure;sharedValue.removeListener(tag+TAG_OFFSET);})" }, 1000000000];
[tmp6, tmp7] = items4;
function removeProgressListener(arg0, removeListener) {
  removeListener.removeListener(arg0 + c0);
}
const items5 = [tmp7];
removeProgressListener.__closure = items5;
removeProgressListener.__workletHash = 9549605636265;
removeProgressListener.__initData = tmp6;
const items6 = [{ code: "(function stopObservingProgress_Pnpm_animationsManagerNativeTs4(tag,sharedValue,scheduleFlush,removeView=false){let[removeProgressListener]=this.__closure;removeProgressListener(tag,sharedValue);global._notifyAboutEnd(tag,removeView);scheduleFlush();})" }, removeProgressListener];
[tmp8, tmp9] = items6;
function stopObservingProgress(arg0, arg1, fn) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  _undefined(arg0, arg1);
  global._notifyAboutEnd(arg0, flag);
  fn();
}
const items7 = [tmp9];
stopObservingProgress.__closure = items7;
stopObservingProgress.__workletHash = 13615757416133;
stopObservingProgress.__initData = tmp8;
const items8 = [{ code: "(function createLayoutAnimationManager_Pnpm_animationsManagerNativeTs5(){let[USE_ANIMATION_BACKEND,makeMutableUI,removeProgressListener,withStyleAnimation,LayoutAnimationType,stopObservingProgress,startObservingProgress,TAG_OFFSET,cancelAnimation]=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();let layoutAnimationStartTimestamp;const getLayoutAnimationStartTimestamp=function(){if(layoutAnimationStartTimestamp===undefined){layoutAnimationStartTimestamp=global._getAnimationTimestamp();globalThis.requestAnimationFrameFinalizer(function(){layoutAnimationStartTimestamp=undefined;});}return layoutAnimationStartTimestamp;};let flushRequested=false;const scheduleFlush=function(){if(USE_ANIMATION_BACKEND||flushRequested){return;}flushRequested=true;globalThis.requestAnimationFrameFinalizer(function(){flushRequested=false;global._maybeFlushUIUpdatesQueue();});};return{start:function(tag,type,yogaValues,config){const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{removeProgressListener(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation,function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,scheduleFlush,shouldRemoveView);}if(style.callback){style.callback(finished);}});startObservingProgress(tag,value,scheduleFlush);const previousFrameTimestamp=global.__frameTimestamp;global.__frameTimestamp??=getLayoutAnimationStartTimestamp();value.value=animation;global.__frameTimestamp=previousFrameTimestamp;},stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}value.removeListener(tag+TAG_OFFSET);cancelAnimation(value);currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);}};})" }, DynamicFlags.getStaticFeatureFlag("USE_ANIMATION_BACKEND"), makeMutableUI, removeProgressListener, _mod1839.withStyleAnimation, LayoutAnimationType.LayoutAnimationType, stopObservingProgress, startObservingProgress, 1000000000, _mod1839.cancelAnimation];
let c0;
let c1;
let c2;
let c3;
let c5;
let c6;
let c7;
let c8;
[tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items8;
function createLayoutAnimationManager() {
  let _true;
  map = new Map();
  map1 = new Map();
  c3 = false;
  function scheduleFlush() {
    const tmp = c0 || c3;
    if (!tmp) {
      c3 = true;
      const _globalThis = globalThis;
      const animationFrameFinalizer = globalThis.requestAnimationFrameFinalizer(() => {
        c3 = false;
        const result = c0._maybeFlushUIUpdatesQueue();
      });
    }
  }
  let obj = {
    start(arg0, arg1, arg2, fn) {
      let closure_1;
      let closure_2;
      __frameTimestamp = arg0;
      map = arg1;
      let tmp = fn(arg2);
      map1 = tmp;
      let animations = tmp.animations;
      let obj = map;
      const value = map.get(arg0);
      if (value) {
        const obj2 = {};
        const merged = Object.assign(value);
        const merged1 = Object.assign(tmp.animations);
        animations = obj2;
      }
      const result = obj.set(arg0, animations);
      let value2 = map1.get(arg0);
      const obj3 = map1;
      if (undefined === value2) {
        const tmp13 = map(tmp.initialValues);
        const result1 = obj3.set(arg0, tmp13);
        value2 = tmp13;
      } else {
        map1(arg0, value2);
        value2._value = tmp.initialValues;
      }
      const tmp15 = _true(animations, (arg0) => {
        const tmp = arg0;
        if (tmp) {
          map.delete(c0);
          map1.delete(c0);
          c5(c0, value2, scheduleFlush, closure_1 === constants.EXITING);
        }
        const obj = closure_2;
        if (closure_2.callback) {
          obj.callback(arg0);
        }
      });
      closure_1_6(arg0, value2, scheduleFlush);
      __frameTimestamp = __frameTimestamp.__frameTimestamp;
      if (__frameTimestamp.__frameTimestamp == null) {
        if (undefined === __frameTimestamp) {
          __frameTimestamp = obj4._getAnimationTimestamp();
          const _globalThis = globalThis;
          const animationFrameFinalizer = globalThis.requestAnimationFrameFinalizer(() => {
            c0 = undefined;
          });
        }
        __frameTimestamp.__frameTimestamp = __frameTimestamp;
      }
      value2.value = tmp15;
      __frameTimestamp.__frameTimestamp = __frameTimestamp;
    },
    stop(arg0) {
      const value = map1.get(arg0);
      const obj = map1;
      if (value) {
        value.removeListener(arg0 + c7);
        c8(value);
        map.delete(arg0);
        obj.delete(arg0);
      }
    }
  };
  return obj;
}
const items9 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
createLayoutAnimationManager.__closure = items9;
createLayoutAnimationManager.__workletHash = 3970514254234;
createLayoutAnimationManager.__initData = tmp10;
let c4 = false;
let closure_5 = { code: "(function pnpm_animationsManagerNativeTs6(){let[createLayoutAnimationManager]=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();})" };

export function initializeLayoutAnimationsManager() {
  let _undefined;
  let tmp7;
  let tmp8;
  const tmp = c4;
  if (!tmp) {
    const items = [closure_5, createLayoutAnimationManager];
    let c0;
    [tmp7, tmp8] = items;
    function pnpm_animationsManagerNativeTs6() {
      global.LayoutAnimationsManager = _undefined();
    }
    const items1 = [tmp8];
    pnpm_animationsManagerNativeTs6.__closure = items1;
    pnpm_animationsManagerNativeTs6.__workletHash = 10331188701395;
    pnpm_animationsManagerNativeTs6.__initData = tmp7;
    const obj = _mod1705;
    obj.runOnUISync(pnpm_animationsManagerNativeTs6);
    c4 = true;
  }
}
