// Module ID: 5040
// Function ID: 43002
// Name: getHandler
// Dependencies: []

// Module 5040 (getHandler)
let closure_2 = { code: "function getHandler_Pnpm_useAnimatedGestureTs1(type,gesture){const{CALLBACK_TYPE}=this.__closure;switch(type){case CALLBACK_TYPE.BEGAN:return gesture.onBegin;case CALLBACK_TYPE.START:return gesture.onStart;case CALLBACK_TYPE.UPDATE:return gesture.onUpdate;case CALLBACK_TYPE.CHANGE:return gesture.onChange;case CALLBACK_TYPE.END:return gesture.onEnd;case CALLBACK_TYPE.FINALIZE:return gesture.onFinalize;case CALLBACK_TYPE.TOUCHES_DOWN:return gesture.onTouchesDown;case CALLBACK_TYPE.TOUCHES_MOVE:return gesture.onTouchesMove;case CALLBACK_TYPE.TOUCHES_UP:return gesture.onTouchesUp;case CALLBACK_TYPE.TOUCHES_CANCELLED:return gesture.onTouchesCancelled;}}" };
let closure_3 = () => {
  function getHandler(arg0, onBegin) {
    if (callback(closure_1[0]).CALLBACK_TYPE.BEGAN === arg0) {
      return onBegin.onBegin;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.START === arg0) {
      return onBegin.onStart;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.UPDATE === arg0) {
      return onBegin.onUpdate;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.CHANGE === arg0) {
      return onBegin.onChange;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.END === arg0) {
      return onBegin.onEnd;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.FINALIZE === arg0) {
      return onBegin.onFinalize;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_DOWN === arg0) {
      return onBegin.onTouchesDown;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_MOVE === arg0) {
      return onBegin.onTouchesMove;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_UP === arg0) {
      return onBegin.onTouchesUp;
    } else if (callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_CANCELLED === arg0) {
      return onBegin.onTouchesCancelled;
    }
  }
  getHandler.__closure = { CALLBACK_TYPE: arg1(arg6[0]).CALLBACK_TYPE };
  getHandler.__workletHash = 12174736290982;
  getHandler.__initData = closure_2;
  return getHandler;
}();
let closure_4 = { code: "function touchEventTypeToCallbackType_Pnpm_useAnimatedGestureTs2(eventType){const{TouchEventType,CALLBACK_TYPE}=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CALLBACK_TYPE.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CALLBACK_TYPE.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CALLBACK_TYPE.TOUCHES_UP;case TouchEventType.TOUCHES_CANCELLED:return CALLBACK_TYPE.TOUCHES_CANCELLED;}return CALLBACK_TYPE.UNDEFINED;}" };
let closure_5 = () => {
  function touchEventTypeToCallbackType(arg0) {
    if (callback(closure_1[1]).TouchEventType.TOUCHES_DOWN === arg0) {
      return callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_DOWN;
    } else if (callback(closure_1[1]).TouchEventType.TOUCHES_MOVE === arg0) {
      return callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_MOVE;
    } else if (callback(closure_1[1]).TouchEventType.TOUCHES_UP === arg0) {
      return callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_UP;
    } else if (callback(closure_1[1]).TouchEventType.TOUCHES_CANCELLED === arg0) {
      return callback(closure_1[0]).CALLBACK_TYPE.TOUCHES_CANCELLED;
    } else {
      return callback(closure_1[0]).CALLBACK_TYPE.UNDEFINED;
    }
  }
  touchEventTypeToCallbackType.__closure = { TouchEventType: arg1(arg6[1]).TouchEventType, CALLBACK_TYPE: arg1(arg6[0]).CALLBACK_TYPE };
  touchEventTypeToCallbackType.__workletHash = 6825086001765;
  touchEventTypeToCallbackType.__initData = closure_4;
  return touchEventTypeToCallbackType;
}();
let closure_6 = { code: "function runWorklet_Pnpm_useAnimatedGestureTs3(type,gesture,event,...args){const{getHandler,tagMessage}=this.__closure;const handler=getHandler(type,gesture);if(gesture.isWorklet[type]){handler===null||handler===void 0||handler(event,...args);}else if(handler){console.warn(tagMessage('Animated gesture callback must be a worklet'));}}" };
let closure_7 = () => {
  function runWorklet(arg0, arg1, arg2) {
    const obj = callback2(arg0, arg1);
    if (arg1.isWorklet[arg0]) {
      const length = arguments.length;
      let _Array = Array;
      let num3 = 0;
      if (length > 3) {
        num3 = length - 3;
      }
      const prototype = _Array.prototype;
      _Array = new _Array(num3);
      for (let num4 = 3; num4 < length; num4 = num4 + 1) {
        _Array[num4 - 3] = arguments[num4];
      }
      if (null != obj) {
        const items = [arg2];
        obj.apply(undefined, items.concat(_Array));
      }
    } else if (obj) {
      const _console = console;
      console.warn(callback(closure_1[2]).tagMessage("Animated gesture callback must be a worklet"));
      const obj2 = callback(closure_1[2]);
    }
  }
  runWorklet.__closure = { getHandler: closure_3, tagMessage: arg1(arg6[2]).tagMessage };
  runWorklet.__workletHash = 6506685255530;
  runWorklet.__initData = closure_6;
  return runWorklet;
}();
let closure_8 = { code: "function isStateChangeEvent_Pnpm_useAnimatedGestureTs4(event){return event.oldState!=null;}" };
let closure_9 = () => {
  function isStateChangeEvent(oldState) {
    return null != oldState.oldState;
  }
  isStateChangeEvent.__closure = {};
  isStateChangeEvent.__workletHash = 8201524245094;
  isStateChangeEvent.__initData = closure_8;
  return isStateChangeEvent;
}();
let closure_10 = { code: "function isTouchEvent_Pnpm_useAnimatedGestureTs5(event){return event.eventType!=null;}" };
let closure_11 = () => {
  function isTouchEvent(eventType) {
    return null != eventType.eventType;
  }
  isTouchEvent.__closure = {};
  isTouchEvent.__workletHash = 6575076970903;
  isTouchEvent.__initData = closure_10;
  return isTouchEvent;
}();
let closure_12 = { code: "function pnpm_useAnimatedGestureTs6(event){const{sharedHandlersCallbacks,isStateChangeEvent,State,runWorklet,CALLBACK_TYPE,lastUpdateEvent,isTouchEvent,stateControllers,GestureStateManager,TouchEventType,touchEventTypeToCallbackType}=this.__closure;const currentCallback=sharedHandlersCallbacks.value;if(!currentCallback){return;}for(let i=0;i<currentCallback.length;i++){const gesture=currentCallback[i];if(event.handlerTag!==gesture.handlerTag){continue;}if(isStateChangeEvent(event)){if(event.oldState===State.UNDETERMINED&&event.state===State.BEGAN){runWorklet(CALLBACK_TYPE.BEGAN,gesture,event);}else if((event.oldState===State.BEGAN||event.oldState===State.UNDETERMINED)&&event.state===State.ACTIVE){runWorklet(CALLBACK_TYPE.START,gesture,event);lastUpdateEvent.value[gesture.handlerTag]=undefined;}else if(event.oldState!==event.state&&event.state===State.END){if(event.oldState===State.ACTIVE){runWorklet(CALLBACK_TYPE.END,gesture,event,true);}runWorklet(CALLBACK_TYPE.FINALIZE,gesture,event,true);}else if((event.state===State.FAILED||event.state===State.CANCELLED)&&event.state!==event.oldState){if(event.oldState===State.ACTIVE){runWorklet(CALLBACK_TYPE.END,gesture,event,false);}runWorklet(CALLBACK_TYPE.FINALIZE,gesture,event,false);}}else if(isTouchEvent(event)){if(!stateControllers[i]||stateControllers[i].handlerTag!==event.handlerTag){stateControllers[i]=GestureStateManager.create(event.handlerTag);}if(event.eventType!==TouchEventType.UNDETERMINED){runWorklet(touchEventTypeToCallbackType(event.eventType),gesture,event,stateControllers[i]);}}else{runWorklet(CALLBACK_TYPE.UPDATE,gesture,event);if(gesture.onChange&&gesture.changeEventCalculator){var _gesture$changeEventC;runWorklet(CALLBACK_TYPE.CHANGE,gesture,(_gesture$changeEventC=gesture.changeEventCalculator)===null||_gesture$changeEventC===void 0?void 0:_gesture$changeEventC.call(gesture,event,lastUpdateEvent.value[gesture.handlerTag]));lastUpdateEvent.value[gesture.handlerTag]=event;}}}}" };
arg5.useAnimatedGesture = function useAnimatedGesture(current2, needsToReattachResult) {
  if (needsToReattachResult(arg6[3]).Reanimated) {
    const Reanimated = needsToReattachResult(arg6[3]).Reanimated;
    const sharedValue = Reanimated.useSharedValue(null);
    needsToReattachResult = sharedValue;
    const Reanimated2 = needsToReattachResult(arg6[3]).Reanimated;
    const sharedValue1 = Reanimated2.useSharedValue([]);
    const arg6 = sharedValue1;
    const items = [];
    let closure_2 = items;
    /* worklet (recovered source) */ function pnpm_useAnimatedGestureTs6(event){const{sharedHandlersCallbacks,isStateChangeEvent,State,runWorklet,CALLBACK_TYPE,lastUpdateEvent,isTouchEvent,stateControllers,GestureStateManager,TouchEventType,touchEventTypeToCallbackType}=this.__closure;const currentCallback=sharedHandlersCallbacks.value;if(!currentCallback){return;}for(let i=0;i<currentCallback.length;i++){const gesture=currentCallback[i];if(event.handlerTag!==gesture.handlerTag){continue;}if(isStateChangeEvent(event)){if(event.oldState===State.UNDETERMINED&&event.state===State.BEGAN){runWorklet(CALLBACK_TYPE.BEGAN,gesture,event);}else if((event.oldState===State.BEGAN||event.oldState===State.UNDETERMINED)&&event.state===State.ACTIVE){runWorklet(CALLBACK_TYPE.START,gesture,event);lastUpdateEvent.value[gesture.handlerTag]=undefined;}else if(event.oldState!==event.state&&event.state===State.END){if(event.oldState===State.ACTIVE){runWorklet(CALLBACK_TYPE.END,gesture,event,true);}runWorklet(CALLBACK_TYPE.FINALIZE,gesture,event,true);}else if((event.state===State.FAILED||event.state===State.CANCELLED)&&event.state!==event.oldState){if(event.oldState===State.ACTIVE){runWorklet(CALLBACK_TYPE.END,gesture,event,false);}runWorklet(CALLBACK_TYPE.FINALIZE,gesture,event,false);}}else if(isTouchEvent(event)){if(!stateControllers[i]||stateControllers[i].handlerTag!==event.handlerTag){stateControllers[i]=GestureStateManager.create(event.handlerTag);}if(event.eventType!==TouchEventType.UNDETERMINED){runWorklet(touchEventTypeToCallbackType(event.eventType),gesture,event,stateControllers[i]);}}else{runWorklet(CALLBACK_TYPE.UPDATE,gesture,event);if(gesture.onChange&&gesture.changeEventCalculator){var _gesture$changeEventC;runWorklet(CALLBACK_TYPE.CHANGE,gesture,(_gesture$changeEventC=gesture.changeEventCalculator)===null||_gesture$changeEventC===void 0?void 0:_gesture$changeEventC.call(gesture,event,lastUpdateEvent.value[gesture.handlerTag]));lastUpdateEvent.value[gesture.handlerTag]=event;}}}}
    const obj = { sharedHandlersCallbacks: sharedValue, isStateChangeEvent: closure_9, State: needsToReattachResult(arg6[4]).State, runWorklet: closure_7, CALLBACK_TYPE: needsToReattachResult(arg6[0]).CALLBACK_TYPE, lastUpdateEvent: sharedValue1, isTouchEvent: closure_11, stateControllers: items, GestureStateManager: needsToReattachResult(arg6[5]).GestureStateManager, TouchEventType: needsToReattachResult(arg6[1]).TouchEventType, touchEventTypeToCallbackType: closure_5 };
    pnpm_useAnimatedGestureTs6.__closure = obj;
    pnpm_useAnimatedGestureTs6.__workletHash = 11751547526080;
    pnpm_useAnimatedGestureTs6.__initData = closure_12;
    const Reanimated3 = needsToReattachResult(arg6[3]).Reanimated;
    current2.animatedEventHandler = Reanimated3.useEvent(pnpm_useAnimatedGestureTs6, ["NitroCoinStackSpotIllustration", "_sendMLSKeyPackage"], needsToReattachResult);
    current2.animatedHandlers = sharedValue;
  }
};
