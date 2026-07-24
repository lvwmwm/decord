// Module ID: 1618
// Function ID: 17964
// Name: startObservingProgress
// Dependencies: [1585, 1607, 1619, 1621, 1589]

// Module 1618 (startObservingProgress)
import isJest from "isJest";
import runWorkletOnJS from "runWorkletOnJS";

isJest = isJest.isAndroid();
let closure_4 = { code: "function startObservingProgress_Pnpm_animationsManagerTs1(tag,sharedValue,animationType){const{LayoutAnimationType,TAG_OFFSET}=this.__closure;const isSharedTransition=animationType===LayoutAnimationType.SHARED_ELEMENT_TRANSITION;sharedValue.addListener(tag+TAG_OFFSET,function(){global._notifyAboutProgress(tag,sharedValue.value,isSharedTransition);});}" };
let closure_5 = (() => {
  function startObservingProgress(arg0, addListener) {
    let closure_0 = arg0;
    let closure_1 = addListener;
    let closure_2 = arg2 === outer1_1(outer1_2[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
    addListener.addListener(arg0 + 1000000000, () => {
      outer2_0._notifyAboutProgress(closure_0, addListener.value, closure_2);
    });
  }
  startObservingProgress.__closure = { LayoutAnimationType: require(1607) /* isWorkletFunction */.LayoutAnimationType, TAG_OFFSET: 1000000000 };
  startObservingProgress.__workletHash = 15816248532180;
  startObservingProgress.__initData = closure_4;
  return startObservingProgress;
})();
let closure_6 = { code: "function stopObservingProgress_Pnpm_animationsManagerTs2(tag,sharedValue,removeView=false){const{TAG_OFFSET}=this.__closure;sharedValue.removeListener(tag+TAG_OFFSET);global._notifyAboutEnd(tag,removeView);}" };
let closure_7 = (() => {
  function stopObservingProgress(arg0, removeListener) {
    removeListener.removeListener(arg0 + 1000000000);
    outer1_0._notifyAboutEnd(arg0, arguments.length > 2 && undefined !== arguments[2] && arguments[2]);
  }
  stopObservingProgress.__closure = { TAG_OFFSET: 1000000000 };
  stopObservingProgress.__workletHash = 8517596296348;
  stopObservingProgress.__initData = closure_6;
  return stopObservingProgress;
})();
let closure_8 = { code: "function createLayoutAnimationManager_Pnpm_animationsManagerTs3(){const{LayoutAnimationType,makeMutableUI,stopObservingProgress,withStyleAnimation,startObservingProgress,IS_ANDROID}=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();const startActually=function(tag,type,yogaValues,config){if(type===LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS){global.ProgressTransitionRegister.onTransitionStart(tag,yogaValues);return;}const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{stopObservingProgress(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation);animation.callback=function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,shouldRemoveView);}style.callback&&style.callback(finished===undefined?false:finished);};startObservingProgress(tag,value,type);value.value=animation;};let start;if(IS_ANDROID){start=function(tag,type,yogaValues,config){return requestAnimationFrame(function(){startActually(tag,type,yogaValues,config);});};}else{start=startActually;}return{start:start,stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}stopObservingProgress(tag,value);}};}" };
const tmp = (() => {
  function createLayoutAnimationManager() {
    const map = new Map();
    const map1 = new Map();
    let start = function startActually(arg0, arg1, arg2, arg3) {
      if (arg1 !== outer2_1(outer2_2[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
        let withStyleAnimationResult = arg3(arg2);
        const start = withStyleAnimationResult;
        let animations = withStyleAnimationResult.animations;
        let value = map.get(arg0);
        if (value) {
          const _Object = Object;
          animations = Object.assign({}, value, withStyleAnimationResult.animations);
        }
        const result = map.set(arg0, animations);
        value = map1.get(arg0);
        let mutableUI = value;
        if (undefined === value) {
          mutableUI = outer2_1(outer2_2[2]).makeMutableUI(withStyleAnimationResult.initialValues);
          const result1 = map1.set(arg0, mutableUI);
          value = mutableUI;
          const obj = outer2_1(outer2_2[2]);
        } else {
          outer2_7(arg0, value);
          value._value = withStyleAnimationResult.initialValues;
        }
        withStyleAnimationResult = outer2_1(outer2_2[3]).withStyleAnimation(animations);
        withStyleAnimationResult.callback = (arg0) => {
          if (arg0) {
            set.delete(set);
            set2.delete(set);
            outer3_7(set, mutableUI, set2 === outer3_1(outer3_2[1]).LayoutAnimationType.EXITING);
          }
          if (withStyleAnimationResult.callback) {
            let tmp13 = undefined !== arg0;
            if (tmp13) {
              tmp13 = arg0;
            }
            withStyleAnimationResult.callback(tmp13);
          }
        };
        outer2_5(arg0, value, arg1);
        value.value = withStyleAnimationResult;
        const obj2 = outer2_1(outer2_2[3]);
      } else {
        const ProgressTransitionRegister = outer2_0.ProgressTransitionRegister;
        ProgressTransitionRegister.onTransitionStart(arg0, arg2);
      }
    };
    let obj = {};
    if (outer1_3) {
      start = function start(arg0, arg1, arg2, arg3) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let closure_2 = arg2;
        let closure_3 = arg3;
        return requestAnimationFrame(() => {
          callback(closure_0, closure_1, callback, closure_3);
        });
      };
    }
    obj.start = start;
    obj.stop = function stop(arg0) {
      const value = map1.get(arg0);
      if (value) {
        outer2_7(arg0, value);
      }
    };
    return obj;
  }
  createLayoutAnimationManager.__closure = { LayoutAnimationType: require(1607) /* isWorkletFunction */.LayoutAnimationType, makeMutableUI: require(1619) /* checkInvalidReadDuringRender */.makeMutableUI, stopObservingProgress: closure_7, withStyleAnimation: require(1621) /* resolvePath */.withStyleAnimation, startObservingProgress: closure_5, IS_ANDROID: isJest };
  createLayoutAnimationManager.__workletHash = 8526874600063;
  createLayoutAnimationManager.__initData = closure_8;
  return createLayoutAnimationManager;
})();
let closure_9 = tmp;
/* worklet (recovered source) */ function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}
pnpm_animationsManagerTs4.__closure = { createLayoutAnimationManager: tmp };
pnpm_animationsManagerTs4.__workletHash = 11408639565737;
pnpm_animationsManagerTs4.__initData = { code: "function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}" };
runWorkletOnJS.runOnUIImmediately(pnpm_animationsManagerTs4)();
