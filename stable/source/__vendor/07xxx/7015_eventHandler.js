// Module ID: 7015
// Function ID: 7016
// Name: eventHandler
// Dependencies: [6997, 6935, 6950, 6937, 6999]
// Exports: eventHandler

// Module 7015 (eventHandler)
import _mod6935 from "module_6935" /* 6935 */;
import TouchEventType from "TouchEventType" /* 6937 */;
import _mod6950 from "module_6950" /* 6950 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6997 */;

require = fn;
const dependencyMap = arg6;
function handleStateChangeEvent(result, arg1, lastUpdateEvent, fn) {
  ({ oldState, state } = result);
  result = DEFAULT_PROPS_TRANSFORMER.flattenAndFilterEvent(result);
  if (oldState === _mod6935.State.UNDETERMINED) {
    if (state === tmp(6935).State.BEGAN) {
      tmp(6997).runCallback(tmp(6950).CALLBACK_TYPE.BEGAN, arg1, result);
      const tmpResult = tmp(6997);
    }
  }
  if (oldState === _mod6935.State.BEGAN) {
    if (state === tmp(6935).State.ACTIVE) {
      if (fn != null) {
        fn(result);
      }
      tmp(6997).runCallback(tmp(6950).CALLBACK_TYPE.START, arg1, result);
      const tmpResult4 = tmp(6997);
    }
  }
  if (oldState !== state) {
    const obj2 = {};
    const merged = Object.assign(result);
    obj2.canceled = state === tmp(6935).State.FAILED || state === tmp(6935).State.CANCELLED;
    if (oldState === tmp(6935).State.ACTIVE) {
      if (fn != null) {
        fn(obj2);
      }
      tmp(6997).runCallback(tmp(6950).CALLBACK_TYPE.END, arg1, obj2);
      const tmpResult5 = tmp(6997);
    }
    const tmp7 = state === tmp(6935).State.FAILED || state === tmp(6935).State.CANCELLED;
    tmp(6997).runCallback(tmp(6950).CALLBACK_TYPE.FINALIZE, arg1, obj2);
    if (lastUpdateEvent) {
      lastUpdateEvent.lastUpdateEvent = undefined;
    }
    const tmpResult6 = tmp(6997);
  }
}
handleStateChangeEvent.__closure = { flattenAndFilterEvent: fn(6997).flattenAndFilterEvent, State: fn(6935).State, runCallback: fn(6997).runCallback, CALLBACK_TYPE: fn(6950).CALLBACK_TYPE };
handleStateChangeEvent.__workletHash = 2533223590466;
handleStateChangeEvent.__initData = { code: "function handleStateChangeEvent_Pnpm_eventHandlerTs1(eventWithData,callbacks,context,fillInDefaultValues){const{flattenAndFilterEvent,State,runCallback,CALLBACK_TYPE}=this.__closure;const{oldState:oldState,state:state}=eventWithData;const event=flattenAndFilterEvent(eventWithData);if(oldState===State.UNDETERMINED&&state===State.BEGAN){runCallback(CALLBACK_TYPE.BEGAN,callbacks,event);}else if((oldState===State.BEGAN||oldState===State.UNDETERMINED)&&state===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(event);runCallback(CALLBACK_TYPE.START,callbacks,event);}else if(oldState!==state&&(state===State.END||state===State.FAILED||state===State.CANCELLED)){const canceled=state===State.FAILED||state===State.CANCELLED;const endEvent={...event,canceled:canceled};if(oldState===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(endEvent);runCallback(CALLBACK_TYPE.END,callbacks,endEvent);}runCallback(CALLBACK_TYPE.FINALIZE,callbacks,endEvent);if(context){context.lastUpdateEvent=undefined;}}}" };
function handleUpdateEvent(lastUpdateEvent, arg1, fn, lastUpdateEvent2) {
  let tmp = lastUpdateEvent;
  if (fn) {
    lastUpdateEvent = undefined;
    if (lastUpdateEvent2) {
      lastUpdateEvent = lastUpdateEvent2.lastUpdateEvent;
    }
    tmp = fn(lastUpdateEvent, lastUpdateEvent);
  }
  const result = DEFAULT_PROPS_TRANSFORMER.flattenAndFilterEvent(tmp);
  DEFAULT_PROPS_TRANSFORMER.runCallback(_mod6950.CALLBACK_TYPE.UPDATE, arg1, result);
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
let obj = { flattenAndFilterEvent: fn(6997).flattenAndFilterEvent, State: fn(6935).State, runCallback: fn(6997).runCallback, CALLBACK_TYPE: fn(6950).CALLBACK_TYPE };
handleUpdateEvent.__closure = { flattenAndFilterEvent: fn(6997).flattenAndFilterEvent, runCallback: fn(6997).runCallback, CALLBACK_TYPE: fn(6950).CALLBACK_TYPE };
handleUpdateEvent.__workletHash = 13503118278355;
handleUpdateEvent.__initData = { code: "function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){const{flattenAndFilterEvent,runCallback,CALLBACK_TYPE}=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CALLBACK_TYPE.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}}" };
function handleTouchEvent(eventType, arg1) {
  if (eventType.eventType !== TouchEventType.TouchEventType.UNDETERMINED) {
    const tmpResult = tmp(6997);
    tmpResult.runCallback(tmp(6997).touchEventTypeToCallbackType(eventType.eventType), arg1, eventType);
    const tmpResult2 = tmp(6997);
  }
}
let obj2 = { flattenAndFilterEvent: fn(6997).flattenAndFilterEvent, runCallback: fn(6997).runCallback, CALLBACK_TYPE: fn(6950).CALLBACK_TYPE };
handleTouchEvent.__closure = { TouchEventType: fn(6937).TouchEventType, runCallback: fn(6997).runCallback, touchEventTypeToCallbackType: fn(6997).touchEventTypeToCallbackType };
handleTouchEvent.__workletHash = 15920153828060;
handleTouchEvent.__initData = { code: "function handleTouchEvent_Pnpm_eventHandlerTs3(event,handlers){const{TouchEventType,runCallback,touchEventTypeToCallbackType}=this.__closure;if(event.eventType!==TouchEventType.UNDETERMINED){runCallback(touchEventTypeToCallbackType(event.eventType),handlers,event);}}" };
function eventHandler(arg0, nativeEvent, arg2, fn, lastUpdateEvent, arg5, fn) {
  const result = DEFAULT_PROPS_TRANSFORMER.maybeExtractNativeEvent(nativeEvent);
  if (obj2.isEventForHandlerWithTag(arg0, result)) {
    if (tmpResult.isStateChangeEvent(result)) {
      handleStateChangeEvent(result, arg2, lastUpdateEvent, fn);
    } else {
      if (tmpResult6.isTouchEvent(result)) {
        if (typeof handleTouchEvent === "function") {
          if (result.eventType !== tmp(6937).TouchEventType.UNDETERMINED) {
            const tmpResult7 = tmp(6997);
            tmpResult7.runCallback(tmp(6997).touchEventTypeToCallbackType(result.eventType), arg2, result);
            const tmpResult8 = tmp(6997);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (!arg5) {
        if (typeof handleUpdateEvent === "function") {
          let tmp9 = result;
          if (fn) {
            lastUpdateEvent = undefined;
            if (lastUpdateEvent) {
              lastUpdateEvent = lastUpdateEvent.lastUpdateEvent;
            }
            tmp9 = fn(result, lastUpdateEvent);
          }
          const result1 = tmp(6997).flattenAndFilterEvent(tmp9);
          const tmpResult9 = tmp(6997);
          tmp(6997).runCallback(tmp(6950).CALLBACK_TYPE.UPDATE, arg2, result1);
          if (lastUpdateEvent) {
            lastUpdateEvent.lastUpdateEvent = result;
          }
          const tmpResult10 = tmp(6997);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      tmpResult6 = tmp(6999);
    }
    tmpResult = tmp(6999);
  }
}
const obj3 = { TouchEventType: fn(6937).TouchEventType, runCallback: fn(6997).runCallback, touchEventTypeToCallbackType: fn(6997).touchEventTypeToCallbackType };
eventHandler.__closure = { maybeExtractNativeEvent: fn(6997).maybeExtractNativeEvent, isEventForHandlerWithTag: fn(6997).isEventForHandlerWithTag, isStateChangeEvent: fn(6999).isStateChangeEvent, handleStateChangeEvent, isTouchEvent: fn(6999).isTouchEvent, handleTouchEvent, handleUpdateEvent };
eventHandler.__workletHash = 218531583134;
eventHandler.__initData = { code: "function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){const{maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent}=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}}" };

export { handleUpdateEvent };
export { handleTouchEvent };
export { eventHandler };
