// Module ID: 5330
// Function ID: 45869
// Name: StateMachineEvent
// Dependencies: [27]
// Exports: getStatesConfig

// Module 5330 (StateMachineEvent)
import { Platform } from "get ActivityIndicator";

let obj = { NATIVE_BEGIN: "nativeBegin", NATIVE_START: "nativeStart", FINALIZE: "finalize", LONG_PRESS_TOUCHES_DOWN: "longPressTouchesDown", CANCEL: "cancel" };

export const StateMachineEvent = obj;
export const getStatesConfig = function getStatesConfig(closure_28, closure_29, isScreenReaderEnabled) {
  if (isScreenReaderEnabled) {
    let obj = {};
    obj.eventName = obj.LONG_PRESS_TOUCHES_DOWN;
    obj.callback = closure_28;
    const items = [obj, , ];
    obj = {};
    obj.eventName = obj.NATIVE_BEGIN;
    items[1] = obj;
    const obj1 = { eventName: obj.FINALIZE, callback: closure_29 };
    items[2] = obj1;
    let items1 = items;
  } else {
    obj = {};
    obj.eventName = obj.NATIVE_BEGIN;
    items1 = [obj, , ];
    const obj2 = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, callback: closure_28 };
    items1[1] = obj2;
    const obj3 = { eventName: obj.FINALIZE, callback: closure_29 };
    items1[2] = obj3;
  }
  return items1;
};
