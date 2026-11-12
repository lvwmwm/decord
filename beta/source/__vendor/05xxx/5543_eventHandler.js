// Module ID: 5543
// Function ID: 5544
// Name: eventHandler
// Dependencies: [5523, 5457, 5473, 5459, 5525]
// Exports: eventHandler, handleTouchEvent, handleUpdateEvent

// Module 5543 (eventHandler)
import State from "State" /* 5457 */;
import TouchEventType from "TouchEventType" /* 5459 */;
import CallbackType from "CallbackType" /* 5473 */;
import _mod5523 from "module_5523" /* 5523 */;
import eventUtils from "eventUtils" /* 5525 */;

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
let tmp20;
let tmp21;
let tmp22;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const items = [{ code: "(function handleStateChangeEvent_Pnpm_eventHandlerTs1(eventWithData,callbacks,context,fillInDefaultValues){let[flattenAndFilterEvent,State,runCallback,CallbackType]=this.__closure;const{oldState:oldState,state:state}=eventWithData;const event=flattenAndFilterEvent(eventWithData);if(oldState===State.UNDETERMINED&&state===State.BEGAN){runCallback(CallbackType.BEGAN,callbacks,event);}else if((oldState===State.BEGAN||oldState===State.UNDETERMINED)&&state===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(event);runCallback(CallbackType.START,callbacks,event);}else if(oldState!==state&&(state===State.END||state===State.FAILED||state===State.CANCELLED)){const canceled=state===State.FAILED||state===State.CANCELLED;const endEvent={...event,canceled:canceled};if(oldState===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(endEvent);runCallback(CallbackType.END,callbacks,endEvent);}runCallback(CallbackType.FINALIZE,callbacks,endEvent);if(context){context.lastUpdateEvent=undefined;}}})" }, _mod5523.flattenAndFilterEvent, State.State, _mod5523.runCallback, CallbackType.CallbackType];
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function handleStateChangeEvent(arg0, arg1, arg2, fn) {
  let oldState;
  let state;
  let tmp8;
  ({ oldState, state } = arg0);
  const tmp = _undefined(arg0);
  if (oldState === constants.UNDETERMINED) {
    if (state === constants.BEGAN) {
      _undefined3(constants2.BEGAN, arg1, tmp);
    }
  }
  if (oldState === constants.BEGAN) {
    if (state === constants.ACTIVE) {
      if (fn != null) {
        fn(tmp);
      }
      _undefined3(constants2.START, arg1, tmp);
    }
  }
  if (oldState !== state) {
    const obj = { canceled: tmp8 };
    tmp8 = state === constants.FAILED || state === constants.CANCELLED;
    const merged = Object.assign(tmp);
    if (oldState === constants.ACTIVE) {
      if (fn != null) {
        fn(obj);
      }
      _undefined3(constants2.END, arg1, obj);
    }
    _undefined3(constants2.FINALIZE, arg1, obj);
    if (arg2) {
      arg2.lastUpdateEvent = undefined;
    }
  }
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
handleStateChangeEvent.__closure = items1;
handleStateChangeEvent.__workletHash = 9978570480356;
handleStateChangeEvent.__initData = tmp2;
const items2 = [{ code: "(function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){let[flattenAndFilterEvent,runCallback,CallbackType]=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CallbackType.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}})" }, _mod5523.flattenAndFilterEvent, _mod5523.runCallback, CallbackType.CallbackType];
[tmp7, tmp8, tmp9, tmp10] = items2;
function handleUpdateEvent(lastUpdateEvent, arg1, fn, lastUpdateEvent2) {
  let tmp = lastUpdateEvent;
  if (fn) {
    lastUpdateEvent = undefined;
    if (lastUpdateEvent2) {
      lastUpdateEvent = lastUpdateEvent2.lastUpdateEvent;
    }
    tmp = fn(lastUpdateEvent, lastUpdateEvent);
  }
  _undefined2(_undefined3.UPDATE, arg1, _undefined(tmp));
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
const items3 = [tmp8, tmp9, tmp10];
handleUpdateEvent.__closure = items3;
handleUpdateEvent.__workletHash = 8347724557322;
handleUpdateEvent.__initData = tmp7;
const items4 = [{ code: "(function handleTouchEvent_Pnpm_eventHandlerTs3(event,handlers){let[TouchEventType,runCallback,touchEventTypeToCallbackType]=this.__closure;if(event.eventType!==TouchEventType.UNDETERMINED){runCallback(touchEventTypeToCallbackType(event.eventType),handlers,event);}})" }, TouchEventType.TouchEventType, _mod5523.runCallback, _mod5523.touchEventTypeToCallbackType];
[tmp11, tmp12, tmp13, tmp14] = items4;
function handleTouchEvent(eventType, arg1) {
  if (eventType.eventType !== _undefined.UNDETERMINED) {
    _undefined2(_undefined3(eventType.eventType), arg1, eventType);
  }
}
const items5 = [tmp12, tmp13, tmp14];
handleTouchEvent.__closure = items5;
handleTouchEvent.__workletHash = 5177559056645;
handleTouchEvent.__initData = tmp11;
const items6 = [{ code: "(function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){let[maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent]=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(eventWithData.handlerData===undefined){return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}})" }, _mod5523.maybeExtractNativeEvent, _mod5523.isEventForHandlerWithTag, eventUtils.isStateChangeEvent, handleStateChangeEvent, eventUtils.isTouchEvent, handleTouchEvent, handleUpdateEvent];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
[tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items6;
function eventHandler(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const tmp = _undefined(arg1);
  if (_undefined2(arg0, tmp)) {
    if (_undefined3(tmp)) {
      _undefined4(tmp, arg2, arg4, arg6);
    } else if (_undefined5(tmp)) {
      _undefined6(tmp, arg2);
    } else if (undefined !== tmp.handlerData) {
      const tmp6 = arg5;
      if (!tmp6) {
        _undefined7(tmp, arg2, arg3, arg4);
      }
    }
  }
}
const items7 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
eventHandler.__closure = items7;
eventHandler.__workletHash = 15212308347969;
eventHandler.__initData = tmp15;

export { handleUpdateEvent };
export { handleTouchEvent };
export { eventHandler };
