// Module ID: 6977
// Function ID: 6978
// Name: eventHandler
// Dependencies: [6959, 6897, 6912, 6899, 6961]
// Exports: eventHandler

// Module 6977 (eventHandler)
import _mod6897 from "module_6897" /* 6897 */;
import TouchEventType from "TouchEventType" /* 6899 */;
import _mod6912 from "module_6912" /* 6912 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6959 */;

require = fn;
const dependencyMap = arg6;
function handleStateChangeEvent(result, arg1, lastUpdateEvent, fn) {
  ({ oldState, state } = result);
  result = DEFAULT_PROPS_TRANSFORMER.flattenAndFilterEvent(result);
  if (oldState === _mod6897.State.UNDETERMINED) {
    if (state === tmp(6897).State.BEGAN) {
      tmp(6959).runCallback(tmp(6912).CALLBACK_TYPE.BEGAN, arg1, result);
      const tmpResult = tmp(6959);
    }
  }
  if (oldState === _mod6897.State.BEGAN) {
    if (state === tmp(6897).State.ACTIVE) {
      if (fn != null) {
        fn(result);
      }
      tmp(6959).runCallback(tmp(6912).CALLBACK_TYPE.START, arg1, result);
      const tmpResult4 = tmp(6959);
    }
  }
  if (oldState !== state) {
    const obj2 = {};
    const merged = Object.assign(result);
    obj2.canceled = state === tmp(6897).State.FAILED || state === tmp(6897).State.CANCELLED;
    if (oldState === tmp(6897).State.ACTIVE) {
      if (fn != null) {
        fn(obj2);
      }
      tmp(6959).runCallback(tmp(6912).CALLBACK_TYPE.END, arg1, obj2);
      const tmpResult5 = tmp(6959);
    }
    const tmp7 = state === tmp(6897).State.FAILED || state === tmp(6897).State.CANCELLED;
    tmp(6959).runCallback(tmp(6912).CALLBACK_TYPE.FINALIZE, arg1, obj2);
    if (lastUpdateEvent) {
      lastUpdateEvent.lastUpdateEvent = undefined;
    }
    const tmpResult6 = tmp(6959);
  }
}
handleStateChangeEvent.__closure = { flattenAndFilterEvent: fn(6959).flattenAndFilterEvent, State: fn(6897).State, runCallback: fn(6959).runCallback, CALLBACK_TYPE: fn(6912).CALLBACK_TYPE };
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
  DEFAULT_PROPS_TRANSFORMER.runCallback(_mod6912.CALLBACK_TYPE.UPDATE, arg1, result);
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
let obj = { flattenAndFilterEvent: fn(6959).flattenAndFilterEvent, State: fn(6897).State, runCallback: fn(6959).runCallback, CALLBACK_TYPE: fn(6912).CALLBACK_TYPE };
handleUpdateEvent.__closure = { flattenAndFilterEvent: fn(6959).flattenAndFilterEvent, runCallback: fn(6959).runCallback, CALLBACK_TYPE: fn(6912).CALLBACK_TYPE };
handleUpdateEvent.__workletHash = 13503118278355;
handleUpdateEvent.__initData = { code: "function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){const{flattenAndFilterEvent,runCallback,CALLBACK_TYPE}=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CALLBACK_TYPE.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}}" };
function handleTouchEvent(eventType, arg1) {
  if (eventType.eventType !== TouchEventType.TouchEventType.UNDETERMINED) {
    const tmpResult = tmp(6959);
    tmpResult.runCallback(tmp(6959).touchEventTypeToCallbackType(eventType.eventType), arg1, eventType);
    const tmpResult2 = tmp(6959);
  }
}
let obj2 = { flattenAndFilterEvent: fn(6959).flattenAndFilterEvent, runCallback: fn(6959).runCallback, CALLBACK_TYPE: fn(6912).CALLBACK_TYPE };
handleTouchEvent.__closure = { TouchEventType: fn(6899).TouchEventType, runCallback: fn(6959).runCallback, touchEventTypeToCallbackType: fn(6959).touchEventTypeToCallbackType };
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
          if (result.eventType !== tmp(6899).TouchEventType.UNDETERMINED) {
            const tmpResult7 = tmp(6959);
            tmpResult7.runCallback(tmp(6959).touchEventTypeToCallbackType(result.eventType), arg2, result);
            const tmpResult8 = tmp(6959);
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
          const result1 = tmp(6959).flattenAndFilterEvent(tmp9);
          const tmpResult9 = tmp(6959);
          tmp(6959).runCallback(tmp(6912).CALLBACK_TYPE.UPDATE, arg2, result1);
          if (lastUpdateEvent) {
            lastUpdateEvent.lastUpdateEvent = result;
          }
          const tmpResult10 = tmp(6959);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      tmpResult6 = tmp(6961);
    }
    tmpResult = tmp(6961);
  }
}
const obj3 = { TouchEventType: fn(6899).TouchEventType, runCallback: fn(6959).runCallback, touchEventTypeToCallbackType: fn(6959).touchEventTypeToCallbackType };
eventHandler.__closure = { maybeExtractNativeEvent: fn(6959).maybeExtractNativeEvent, isEventForHandlerWithTag: fn(6959).isEventForHandlerWithTag, isStateChangeEvent: fn(6961).isStateChangeEvent, handleStateChangeEvent, isTouchEvent: fn(6961).isTouchEvent, handleTouchEvent, handleUpdateEvent };
eventHandler.__workletHash = 218531583134;
eventHandler.__initData = { code: "function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){const{maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent}=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}}" };

export { handleUpdateEvent };
export { handleTouchEvent };
export { eventHandler };
