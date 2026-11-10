// Module ID: 5476
// Function ID: 5477
// Name: useAnimatedGesture
// Dependencies: [5443, 5429, 5426, 5466, 5427, 5428]
// Exports: useAnimatedGesture

// Module 5476 (useAnimatedGesture)
import tagMessage from "tagMessage" /* 5426 */;
import State from "State" /* 5427 */;
import gestureStateManager from "gestureStateManager" /* 5428 */;
import TouchEventType from "TouchEventType" /* 5429 */;
import CallbackType from "CallbackType" /* 5443 */;
import reanimatedWrapper from "reanimatedWrapper" /* 5466 */;

let tmp10;
let tmp11;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let items = [{ code: "(function getHandler_Pnpm_useAnimatedGestureTs1(type,gesture){let[CallbackType]=this.__closure;switch(type){case CallbackType.BEGAN:return gesture.onBegin;case CallbackType.START:return gesture.onStart;case CallbackType.UPDATE:return gesture.onUpdate;case CallbackType.CHANGE:return gesture.onChange;case CallbackType.END:return gesture.onEnd;case CallbackType.FINALIZE:return gesture.onFinalize;case CallbackType.TOUCHES_DOWN:return gesture.onTouchesDown;case CallbackType.TOUCHES_MOVE:return gesture.onTouchesMove;case CallbackType.TOUCHES_UP:return gesture.onTouchesUp;case CallbackType.TOUCHES_CANCEL:return gesture.onTouchesCancelled;}})" }, CallbackType.CallbackType];
[tmp2, tmp3] = items;
function getHandler(arg0, onBegin) {
  if (_undefined.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (_undefined.START === arg0) {
    return onBegin.onStart;
  } else if (_undefined.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (_undefined.CHANGE === arg0) {
    return onBegin.onChange;
  } else if (_undefined.END === arg0) {
    return onBegin.onEnd;
  } else if (_undefined.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (_undefined.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (_undefined.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (_undefined.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else {
    return _undefined.TOUCHES_CANCEL === arg0 ? onBegin.onTouchesCancelled : undefined;
  }
}
let items1 = [tmp3];
getHandler.__closure = items1;
getHandler.__workletHash = 13207499817485;
getHandler.__initData = tmp2;
const items2 = [{ code: "(function touchEventTypeToCallbackType_Pnpm_useAnimatedGestureTs2(eventType){let[TouchEventType,CallbackType]=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CallbackType.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CallbackType.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CallbackType.TOUCHES_UP;case TouchEventType.TOUCHES_CANCEL:return CallbackType.TOUCHES_CANCEL;}return CallbackType.UNDEFINED;})" }, TouchEventType.TouchEventType, CallbackType.CallbackType];
[tmp4, tmp5, tmp6] = items2;
function touchEventTypeToCallbackType(arg0) {
  if (_undefined.TOUCHES_DOWN === arg0) {
    return _undefined2.TOUCHES_DOWN;
  } else if (_undefined.TOUCHES_MOVE === arg0) {
    return _undefined2.TOUCHES_MOVE;
  } else if (_undefined.TOUCHES_UP === arg0) {
    return _undefined2.TOUCHES_UP;
  } else if (_undefined.TOUCHES_CANCEL === arg0) {
    return _undefined2.TOUCHES_CANCEL;
  } else {
    return _undefined2.UNDEFINED;
  }
}
const items3 = [tmp5, tmp6];
touchEventTypeToCallbackType.__closure = items3;
touchEventTypeToCallbackType.__workletHash = 16387699537692;
touchEventTypeToCallbackType.__initData = tmp4;
const items4 = [{ code: "(function runWorklet_Pnpm_useAnimatedGestureTs3(type,gesture,event,...args){let[getHandler,tagMessage]=this.__closure;const handler=getHandler(type,gesture);if(gesture.isWorklet[type]){handler===null||handler===void 0||handler(event,...args);}else if(handler){console.warn(tagMessage('Animated gesture callback must be a worklet'));}})" }, getHandler, tagMessage.tagMessage];
let c0;
let c1;
[tmp7, tmp8, tmp9] = items4;
function runWorklet(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  const tmp3 = _undefined(arg0, arg1);
  if (arg1.isWorklet[arg0]) {
    if (tmp3 != null) {
      const items = [arg2];
      HermesBuiltin.arraySpread(items, substr, 1);
      HermesBuiltin.apply(tmp3, items, undefined);
    }
  } else if (tmp3) {
    const _console = console;
    console.warn(_undefined2("Animated gesture callback must be a worklet"));
  }
}
const items5 = [tmp8, tmp9];
runWorklet.__closure = items5;
runWorklet.__workletHash = 10750272614259;
runWorklet.__initData = tmp7;
const items6 = [{ code: "(function isStateChangeEvent_Pnpm_useAnimatedGestureTs4(event){return event.oldState!=null;})" }];
[tmp10] = items6;
function isStateChangeEvent(oldState) {
  return null != oldState.oldState;
}
isStateChangeEvent.__workletHash = 5877109924999;
isStateChangeEvent.__initData = tmp10;
const items7 = [{ code: "(function isTouchEvent_Pnpm_useAnimatedGestureTs5(event){return event.eventType!=null;})" }];
[tmp11] = items7;
function isTouchEvent(eventType) {
  return null != eventType.eventType;
}
isTouchEvent.__workletHash = 12487944287542;
isTouchEvent.__initData = tmp11;
let closure_6 = { code: "(function pnpm_useAnimatedGestureTs6(event){let[sharedHandlersCallbacks,isStateChangeEvent,State,runWorklet,CallbackType,lastUpdateEvent,isTouchEvent,stateControllers,GestureStateManager,TouchEventType,touchEventTypeToCallbackType]=this.__closure;const currentCallback=sharedHandlersCallbacks.value;if(!currentCallback){return;}for(let i=0;i<currentCallback.length;i++){const gesture=currentCallback[i];if(event.handlerTag!==gesture.handlerTag){continue;}if(isStateChangeEvent(event)){if(event.oldState===State.UNDETERMINED&&event.state===State.BEGAN){runWorklet(CallbackType.BEGAN,gesture,event);}else if((event.oldState===State.BEGAN||event.oldState===State.UNDETERMINED)&&event.state===State.ACTIVE){runWorklet(CallbackType.START,gesture,event);lastUpdateEvent.value[gesture.handlerTag]=undefined;}else if(event.oldState!==event.state&&event.state===State.END){if(event.oldState===State.ACTIVE){runWorklet(CallbackType.END,gesture,event,true);}runWorklet(CallbackType.FINALIZE,gesture,event,true);}else if((event.state===State.FAILED||event.state===State.CANCELLED)&&event.state!==event.oldState){if(event.oldState===State.ACTIVE){runWorklet(CallbackType.END,gesture,event,false);}runWorklet(CallbackType.FINALIZE,gesture,event,false);}}else if(isTouchEvent(event)){if(!stateControllers[i]||stateControllers[i].handlerTag!==event.handlerTag){stateControllers[i]=GestureStateManager.create(event.handlerTag);}if(event.eventType!==TouchEventType.UNDETERMINED){runWorklet(touchEventTypeToCallbackType(event.eventType),gesture,event,stateControllers[i]);}}else{runWorklet(CallbackType.UPDATE,gesture,event);if(gesture.onChange&&gesture.changeEventCalculator){var _gesture$changeEventC;runWorklet(CallbackType.CHANGE,gesture,(_gesture$changeEventC=gesture.changeEventCalculator)===null||_gesture$changeEventC===void 0?void 0:_gesture$changeEventC.call(gesture,event,lastUpdateEvent.value[gesture.handlerTag]));lastUpdateEvent.value[gesture.handlerTag]=event;}}}})" };

export function useAnimatedGesture(current2, needsToReattachResult) {
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp2 = dependencyMap;
  if (reanimatedWrapper.Reanimated) {
    const Reanimated = tmp(5466).Reanimated;
    let tmp3 = null;
    const sharedValue = Reanimated.useSharedValue(null);
    const Reanimated2 = tmp(5466).Reanimated;
    let tmp6 = closure_6;
    const items = [closure_6, sharedValue, , , , , , , , , , ];
    let tmp7 = isStateChangeEvent;
    items[2] = isStateChangeEvent;
    const sharedValue1 = Reanimated2.useSharedValue([]);
    items[3] = State.State;
    let tmp8 = runWorklet;
    items[4] = runWorklet;
    items[5] = CallbackType.CallbackType;
    items[6] = sharedValue1;
    items[7] = isTouchEvent;
    items[8] = [];
    items[9] = gestureStateManager.GestureStateManager;
    items[10] = TouchEventType.TouchEventType;
    let tmp10 = touchEventTypeToCallbackType;
    items[11] = touchEventTypeToCallbackType;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let c10;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items;
    let tmp24 = current2;
    let tmp25 = needsToReattachResult;
    function pnpm_useAnimatedGestureTs6(handlerTag) {
      const value = _undefined.value;
      if (value) {
        let num;
        for (let num = 0; num < value.length; num = num + 1) {
          let tmp2 = value[num];
          if (handlerTag.handlerTag === tmp2.handlerTag) {
            if (_undefined2(handlerTag)) {
              let tmp17 = _undefined3;
              if (handlerTag.oldState === _undefined3.UNDETERMINED) {
                if (handlerTag.state === tmp17.BEGAN) {
                  let tmp45 = _undefined4(_undefined5.BEGAN, tmp2, handlerTag);
                }
              }
              if (handlerTag.oldState === tmp17.BEGAN) {
                if (handlerTag.state === tmp17.ACTIVE) {
                  let tmp20 = _undefined4(_undefined5.START, tmp2, handlerTag);
                  _undefined6.value[tmp2.handlerTag] = undefined;
                }
              }
              if (handlerTag.oldState !== handlerTag.state) {
                if (handlerTag.state === tmp17.END) {
                  if (handlerTag.oldState === tmp17.ACTIVE) {
                    let flag3 = true;
                    let tmp37 = _undefined4(_undefined5.END, tmp2, handlerTag, true);
                  }
                  let flag4 = true;
                  let tmp42 = _undefined4(_undefined5.FINALIZE, tmp2, handlerTag, true);
                }
              }
              let tmp22 = handlerTag.state !== tmp17.FAILED && handlerTag.state !== tmp17.CANCELLED || handlerTag.state === handlerTag.oldState;
              if (!tmp22) {
                if (handlerTag.oldState === tmp17.ACTIVE) {
                  let flag = false;
                  let tmp27 = _undefined4(_undefined5.END, tmp2, handlerTag, false);
                }
                let flag2 = false;
                let tmp32 = _undefined4(_undefined5.FINALIZE, tmp2, handlerTag, false);
              }
            } else if (_undefined7(handlerTag)) {
              let tmp13 = _undefined8;
              let tmp14 = _undefined8[num] && tmp13[num].handlerTag === handlerTag.handlerTag;
              if (!tmp14) {
                tmp13[num] = _undefined9.create(handlerTag.handlerTag);
              }
              if (handlerTag.eventType !== _undefined10.UNDETERMINED) {
                let tmp51 = _undefined4(_undefined11(handlerTag.eventType), tmp2, handlerTag, tmp13[num]);
              }
            } else {
              let tmp5 = _undefined4;
              let tmp6 = _undefined5;
              let tmp7 = _undefined4(_undefined5.UPDATE, tmp2, handlerTag);
              let tmp8 = tmp2.onChange && tmp2.changeEventCalculator;
              if (tmp8) {
                let changeEventCalculator = tmp2.changeEventCalculator;
                let result;
                let CHANGE = tmp6.CHANGE;
                if (changeEventCalculator != null) {
                  result = changeEventCalculator(handlerTag, _undefined6.value[tmp2.handlerTag]);
                }
                let tmp5Result = tmp5(CHANGE, tmp2, result);
                _undefined6.value[tmp2.handlerTag] = handlerTag;
              }
            }
          }
        }
      }
    }
    const items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
    pnpm_useAnimatedGestureTs6.__closure = items1;
    const num = 2837684349286;
    pnpm_useAnimatedGestureTs6.__workletHash = 2837684349286;
    pnpm_useAnimatedGestureTs6.__initData = tmp12;
    const Reanimated3 = tmp(5466).Reanimated;
    current2.animatedEventHandler = Reanimated3.useEvent(pnpm_useAnimatedGestureTs6, ["onGestureHandlerStateChange", "onGestureHandlerEvent"], needsToReattachResult);
    current2.animatedHandlers = sharedValue;
  }
}
