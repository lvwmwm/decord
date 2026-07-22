// Module ID: 5292
// Function ID: 45712
// Name: StateMachineEvent
// Dependencies: []
// Exports: getStatesConfig

// Module 5292 (StateMachineEvent)
const Platform = require(dependencyMap[0]).Platform;
const obj = { NATIVE_BEGIN: "nativeBegin", NATIVE_START: "nativeStart", FINALIZE: "finalize", LONG_PRESS_TOUCHES_DOWN: "longPressTouchesDown", CANCEL: "cancel" };

export const StateMachineEvent = obj;
export const getStatesConfig = function getStatesConfig(callback, callback2) {
  let obj = { eventName: obj.NATIVE_BEGIN };
  const items = [obj, , ];
  obj = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, callback };
  items[1] = obj;
  obj = { eventName: obj.FINALIZE, callback: callback2 };
  items[2] = obj;
  return items;
};
