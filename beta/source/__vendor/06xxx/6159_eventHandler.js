// Module ID: 6159
// Function ID: 6160
// Name: eventHandler
// Dependencies: [6141, 6079, 6094, 6081, 6143]
// Exports: eventHandler

// Module 6159 (eventHandler)
import _mod6079 from "module_6079" /* 6079 */;
import TouchEventType from "TouchEventType" /* 6081 */;
import _mod6094 from "module_6094" /* 6094 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6141 */;

require = fn;
const dependencyMap = arg6;
function handleStateChangeEvent(result, arg1, lastUpdateEvent, fn) {
  ({ oldState, state } = result);
  result = DEFAULT_PROPS_TRANSFORMER.flattenAndFilterEvent(result);
  if (oldState === _mod6079.State.UNDETERMINED) {
    if (state === tmp(6079).State.BEGAN) {
      tmp(6141).runCallback(tmp(6094).CALLBACK_TYPE.BEGAN, arg1, result);
      const tmpResult = tmp(6141);
    }
  }
  if (oldState === _mod6079.State.BEGAN) {
    if (state === tmp(6079).State.ACTIVE) {
      if (fn != null) {
        fn(result);
      }
      tmp(6141).runCallback(tmp(6094).CALLBACK_TYPE.START, arg1, result);
      const tmpResult4 = tmp(6141);
    }
  }
  if (oldState !== state) {
    const obj2 = {};
    const merged = Object.assign(result);
    obj2.canceled = state === tmp(6079).State.FAILED || state === tmp(6079).State.CANCELLED;
    if (oldState === tmp(6079).State.ACTIVE) {
      if (fn != null) {
        fn(obj2);
      }
      tmp(6141).runCallback(tmp(6094).CALLBACK_TYPE.END, arg1, obj2);
      const tmpResult5 = tmp(6141);
    }
    const tmp7 = state === tmp(6079).State.FAILED || state === tmp(6079).State.CANCELLED;
    tmp(6141).runCallback(tmp(6094).CALLBACK_TYPE.FINALIZE, arg1, obj2);
    if (lastUpdateEvent) {
      lastUpdateEvent.lastUpdateEvent = undefined;
    }
    const tmpResult6 = tmp(6141);
  }
}
handleStateChangeEvent.__closure = { flattenAndFilterEvent: fn(6141).flattenAndFilterEvent, State: fn(6079).State, runCallback: fn(6141).runCallback, CALLBACK_TYPE: fn(6094).CALLBACK_TYPE };
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
  DEFAULT_PROPS_TRANSFORMER.runCallback(_mod6094.CALLBACK_TYPE.UPDATE, arg1, result);
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
let obj = { flattenAndFilterEvent: fn(6141).flattenAndFilterEvent, State: fn(6079).State, runCallback: fn(6141).runCallback, CALLBACK_TYPE: fn(6094).CALLBACK_TYPE };
handleUpdateEvent.__closure = { flattenAndFilterEvent: fn(6141).flattenAndFilterEvent, runCallback: fn(6141).runCallback, CALLBACK_TYPE: fn(6094).CALLBACK_TYPE };
handleUpdateEvent.__workletHash = 13503118278355;
handleUpdateEvent.__initData = { code: "function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){const{flattenAndFilterEvent,runCallback,CALLBACK_TYPE}=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CALLBACK_TYPE.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}}" };
function handleTouchEvent(eventType, arg1) {
  if (eventType.eventType !== TouchEventType.TouchEventType.UNDETERMINED) {
    const tmpResult = tmp(6141);
    tmpResult.runCallback(tmp(6141).touchEventTypeToCallbackType(eventType.eventType), arg1, eventType);
    const tmpResult2 = tmp(6141);
  }
}
let obj2 = { flattenAndFilterEvent: fn(6141).flattenAndFilterEvent, runCallback: fn(6141).runCallback, CALLBACK_TYPE: fn(6094).CALLBACK_TYPE };
handleTouchEvent.__closure = { TouchEventType: fn(6081).TouchEventType, runCallback: fn(6141).runCallback, touchEventTypeToCallbackType: fn(6141).touchEventTypeToCallbackType };
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
          if (result.eventType !== tmp(6081).TouchEventType.UNDETERMINED) {
            const tmpResult7 = tmp(6141);
            tmpResult7.runCallback(tmp(6141).touchEventTypeToCallbackType(result.eventType), arg2, result);
            const tmpResult8 = tmp(6141);
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
          const result1 = tmp(6141).flattenAndFilterEvent(tmp9);
          const tmpResult9 = tmp(6141);
          tmp(6141).runCallback(tmp(6094).CALLBACK_TYPE.UPDATE, arg2, result1);
          if (lastUpdateEvent) {
            lastUpdateEvent.lastUpdateEvent = result;
          }
          const tmpResult10 = tmp(6141);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      tmpResult6 = tmp(6143);
    }
    tmpResult = tmp(6143);
  }
}
const obj3 = { TouchEventType: fn(6081).TouchEventType, runCallback: fn(6141).runCallback, touchEventTypeToCallbackType: fn(6141).touchEventTypeToCallbackType };
eventHandler.__closure = { maybeExtractNativeEvent: fn(6141).maybeExtractNativeEvent, isEventForHandlerWithTag: fn(6141).isEventForHandlerWithTag, isStateChangeEvent: fn(6143).isStateChangeEvent, handleStateChangeEvent, isTouchEvent: fn(6143).isTouchEvent, handleTouchEvent, handleUpdateEvent };
eventHandler.__workletHash = 218531583134;
eventHandler.__initData = { code: "function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){const{maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent}=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}}" };

export { handleUpdateEvent };
export { handleTouchEvent };
export { eventHandler };
