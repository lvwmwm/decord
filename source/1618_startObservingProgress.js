// Module ID: 1618
// Function ID: 17962
// Name: startObservingProgress
// Dependencies: []

// Module 1618 (startObservingProgress)
const _module = require(dependencyMap[0]);
let closure_3 = _module.isAndroid();
let closure_4 = { code: "function startObservingProgress_Pnpm_animationsManagerTs1(tag,sharedValue,animationType){const{LayoutAnimationType,TAG_OFFSET}=this.__closure;const isSharedTransition=animationType===LayoutAnimationType.SHARED_ELEMENT_TRANSITION;sharedValue.addListener(tag+TAG_OFFSET,function(){global._notifyAboutProgress(tag,sharedValue.value,isSharedTransition);});}" };
let closure_5 = () => {
  function startObservingProgress(arg0, addListener) {
    closure_2 = arg2 === addListener(closure_2[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
    addListener.addListener(arg0 + 1000000000, () => {
      arg0._notifyAboutProgress(arg0, arg1.value, closure_2);
    });
  }
  startObservingProgress.__closure = { LayoutAnimationType: require(dependencyMap[1]).LayoutAnimationType, TAG_OFFSET: 1000000000 };
  startObservingProgress.__workletHash = 15816248532180;
  startObservingProgress.__initData = closure_4;
  return startObservingProgress;
}();
let closure_6 = { code: "function stopObservingProgress_Pnpm_animationsManagerTs2(tag,sharedValue,removeView=false){const{TAG_OFFSET}=this.__closure;sharedValue.removeListener(tag+TAG_OFFSET);global._notifyAboutEnd(tag,removeView);}" };
let closure_7 = () => {
  function stopObservingProgress(arg0, removeListener) {
    removeListener.removeListener(arg0 + 1000000000);
    closure_0._notifyAboutEnd(arg0, arguments.length > 2 && undefined !== arguments[2] && arguments[2]);
  }
  stopObservingProgress.__closure = { TAG_OFFSET: 1000000000 };
  stopObservingProgress.__workletHash = 8517596296348;
  stopObservingProgress.__initData = closure_6;
  return stopObservingProgress;
}();
let closure_8 = { code: "function createLayoutAnimationManager_Pnpm_animationsManagerTs3(){const{LayoutAnimationType,makeMutableUI,stopObservingProgress,withStyleAnimation,startObservingProgress,IS_ANDROID}=this.__closure;const currentAnimationForTag=new Map();const mutableValuesForTag=new Map();const startActually=function(tag,type,yogaValues,config){if(type===LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS){global.ProgressTransitionRegister.onTransitionStart(tag,yogaValues);return;}const style=config(yogaValues);let currentAnimation=style.animations;const previousAnimation=currentAnimationForTag.get(tag);if(previousAnimation){currentAnimation={...previousAnimation,...style.animations};}currentAnimationForTag.set(tag,currentAnimation);let value=mutableValuesForTag.get(tag);if(value===undefined){value=makeMutableUI(style.initialValues);mutableValuesForTag.set(tag,value);}else{stopObservingProgress(tag,value);value._value=style.initialValues;}const animation=withStyleAnimation(currentAnimation);animation.callback=function(finished){if(finished){currentAnimationForTag.delete(tag);mutableValuesForTag.delete(tag);const shouldRemoveView=type===LayoutAnimationType.EXITING;stopObservingProgress(tag,value,shouldRemoveView);}style.callback&&style.callback(finished===undefined?false:finished);};startObservingProgress(tag,value,type);value.value=animation;};let start;if(IS_ANDROID){start=function(tag,type,yogaValues,config){return requestAnimationFrame(function(){startActually(tag,type,yogaValues,config);});};}else{start=startActually;}return{start:start,stop:function(tag){const value=mutableValuesForTag.get(tag);if(!value){return;}stopObservingProgress(tag,value);}};}" };
const tmp = () => {
  function createLayoutAnimationManager() {
    const map = new Map();
    const map1 = new Map();
    let start = function startActually(arg0, arg1, arg2, arg3) {
      if (arg1 !== arg1(start[1]).LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
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
          mutableUI = map1(start[2]).makeMutableUI(withStyleAnimationResult.initialValues);
          const result1 = map1.set(arg0, mutableUI);
          value = mutableUI;
          const obj = map1(start[2]);
        } else {
          callback2(arg0, value);
          value._value = withStyleAnimationResult.initialValues;
        }
        withStyleAnimationResult = map1(start[3]).withStyleAnimation(animations);
        withStyleAnimationResult.callback = (arg0) => {
          if (arg0) {
            arg0.delete(arg0);
            arg1.delete(arg0);
            callback(arg0, mutableUI, arg1 === arg1(withStyleAnimationResult[1]).LayoutAnimationType.EXITING);
          }
          if (withStyleAnimationResult.callback) {
            let tmp13 = undefined !== arg0;
            if (tmp13) {
              tmp13 = arg0;
            }
            withStyleAnimationResult.callback(tmp13);
          }
        };
        callback(arg0, value, arg1);
        value.value = withStyleAnimationResult;
        const obj2 = map1(start[3]);
      } else {
        const ProgressTransitionRegister = map.ProgressTransitionRegister;
        ProgressTransitionRegister.onTransitionStart(arg0, arg2);
      }
    };
    const obj = {};
    if (closure_3) {
      start = function start(arg0, arg1, arg2, arg3) {
        const start = arg2;
        return requestAnimationFrame(() => {
          arg2(arg0, arg1, arg2, arg3);
        });
      };
    }
    obj.start = start;
    obj.stop = function stop(arg0) {
      const value = map1.get(arg0);
      if (value) {
        callback2(arg0, value);
      }
    };
    return obj;
  }
  createLayoutAnimationManager.__closure = { LayoutAnimationType: require(dependencyMap[1]).LayoutAnimationType, makeMutableUI: require(dependencyMap[2]).makeMutableUI, stopObservingProgress: closure_7, withStyleAnimation: require(dependencyMap[3]).withStyleAnimation, startObservingProgress: closure_5, IS_ANDROID: closure_3 };
  createLayoutAnimationManager.__workletHash = 8526874600063;
  createLayoutAnimationManager.__initData = closure_8;
  return createLayoutAnimationManager;
}();
const _module1 = require(dependencyMap[4]);
/* worklet (recovered source) */ function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}
pnpm_animationsManagerTs4.__closure = { createLayoutAnimationManager: tmp };
pnpm_animationsManagerTs4.__workletHash = 11408639565737;
pnpm_animationsManagerTs4.__initData = { code: "function pnpm_animationsManagerTs4(){const{createLayoutAnimationManager}=this.__closure;global.LayoutAnimationsManager=createLayoutAnimationManager();}" };
_module1.runOnUIImmediately(pnpm_animationsManagerTs4)();
