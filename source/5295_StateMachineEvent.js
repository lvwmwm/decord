// Module ID: 5295
// Function ID: 45736
// Name: StateMachineEvent
// Dependencies: [27]
// Exports: getStatesConfig

// Module 5295 (StateMachineEvent)
import { Platform } from "get ActivityIndicator";

let obj = { NATIVE_BEGIN: "nativeBegin", NATIVE_START: "nativeStart", FINALIZE: "finalize", LONG_PRESS_TOUCHES_DOWN: "longPressTouchesDown", CANCEL: "cancel" };

export const StateMachineEvent = obj;
export const getStatesConfig = function getStatesConfig(closure_28, closure_29) {
  obj = { eventName: obj.NATIVE_BEGIN };
  const items = [obj, , ];
  obj = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, callback: closure_28 };
  items[1] = obj;
  obj = { eventName: obj.FINALIZE, callback: closure_29 };
  items[2] = obj;
  return items;
};
